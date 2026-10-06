#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { runModuleMatrix } = require('./run-module-matrix');
const { runReadmeExamples } = require('./run-readme-examples');

const ROOT = path.resolve(__dirname, '../..');
const REPORT_DIR = path.join(__dirname, 'reports');

function parseArgs(argv) {
  return {
    skipBuild: argv.includes('--skip-build'),
    skipTests: argv.includes('--skip-tests'),
    live: argv.includes('--live'),
    liveSolve: argv.includes('--live-solve'),
    out: (() => {
      const index = argv.indexOf('--out');
      return index >= 0 ? argv[index + 1] : path.join(REPORT_DIR, 'latest.json');
    })(),
  };
}

function runCommand(command, args) {
  return new Promise((resolve) => {
    const child = spawn(command, args, { cwd: ROOT, env: process.env, stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString();
    });
    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString();
    });
    child.on('close', (code) => {
      resolve({ code, stdout, stderr });
    });
  });
}

function npmCommand() {
  return process.platform === 'win32' ? 'npm.cmd' : 'npm';
}

async function runNpmScript(script) {
  const result = await runCommand(npmCommand(), ['run', script]);
  return {
    name: `npm run ${script}`,
    status: result.code === 0 ? 'pass' : 'fail',
    kind: 'executed',
    exitCode: result.code,
    stdout: result.stdout.trim().slice(-4000),
    stderr: result.stderr.trim().slice(-4000),
    error: result.code === 0 ? undefined : `${script} failed with exit ${result.code}`,
    reproduction: `npm run ${script}`,
  };
}

function renderMarkdown(report) {
  const lines = [
    '# SDK self-verify report',
    '',
    `Generated: ${report.generatedAt}`,
    '',
    'This file mixes **executed** checks (commands actually run) and placeholders for **analysis** (API docs comparison done by the agent).',
    '',
    '## Summary',
    '',
    `- Overall: **${report.status}**`,
    `- Build: ${report.build.status}`,
    `- README examples: ${report.readme.status}`,
    `- CommonJS/ESM matrix: ${report.modules.status}`,
    `- Unit tests: ${report.tests.unit.status}`,
    `- Integration tests: ${report.tests.integration.status}`,
    '',
    '## Executed checks',
    '',
  ];

  const executed = [];
  const collect = (items) => {
    for (const item of items || []) {
      if (item && item.kind === 'executed') {
        executed.push(item);
      }
      if (item && item.checks) {
        collect(item.checks);
      }
    }
  };
  collect([report.build, report.readme, report.modules.cjs, report.modules.esm, report.tests.unit, report.tests.integration]);
  collect(report.readme.checks);

  for (const check of executed) {
    lines.push(`- ${check.status === 'pass' ? 'PASS' : 'FAIL'} \`${check.name}\`${check.error ? ` — ${check.error}` : ''}`);
    if (check.reproduction && check.status === 'fail') {
      lines.push(`  - Reproduce: \`${check.reproduction}\``);
    }
  }

  lines.push('', '## Skipped / unverified', '');
  const skipped = (report.readme.checks || []).filter((check) => check.status === 'skip' || check.kind === 'skipped');
  if (skipped.length === 0) {
    lines.push('- None from the mechanical runner.');
  } else {
    for (const check of skipped) {
      lines.push(`- \`${check.name}\`: ${check.reason || 'skipped'}`);
    }
  }

  lines.push(
    '',
    '## Analysis placeholders (fill by agent)',
    '',
    '- [ ] Compare SDK request fields with https://docs.capmonster.cloud/docs/captchas/',
    '- [ ] Compare createTask / getTaskResult / getBalance with https://docs.capmonster.cloud/docs/methods/',
    '- [ ] Record missing or stale SDK functionality, with documentation links',
    '- [ ] Record documentation contradictions separately from code defects',
    '',
    'See `.cursor/skills/sdk-self-verify/report-template.md` for the complete report shape.',
    '',
  );

  return `${lines.join('\n')}\n`;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  fs.mkdirSync(path.dirname(args.out), { recursive: true });

  const report = {
    generatedAt: new Date().toISOString(),
    kind: 'mechanical-run',
    status: 'pass',
    build: { name: 'npm run build', status: 'skip', kind: args.skipBuild ? 'skipped' : 'executed' },
    readme: { status: 'skip', checks: [] },
    modules: { status: 'skip' },
    tests: {
      unit: { name: 'npm run test-unit', status: 'skip', kind: args.skipTests ? 'skipped' : 'executed' },
      integration: { name: 'npm run test-integr', status: 'skip', kind: args.skipTests ? 'skipped' : 'executed' },
    },
  };

  if (!args.skipBuild) {
    report.build = await runNpmScript('build');
  } else {
    report.build = { name: 'npm run build', status: 'skip', kind: 'skipped', reason: '--skip-build' };
  }

  if (report.build.status === 'fail') {
    report.status = 'fail';
    report.readme = { status: 'skip', kind: 'skipped', reason: 'build failed', checks: [] };
    report.modules = { status: 'skip', kind: 'skipped', reason: 'build failed' };
  } else {
    report.readme = await runReadmeExamples({ live: args.live, liveSolve: args.liveSolve });
    report.modules = await runModuleMatrix();
  }

  if (args.skipTests) {
    report.tests.unit = { name: 'npm run test-unit', status: 'skip', kind: 'skipped', reason: '--skip-tests' };
    report.tests.integration = { name: 'npm run test-integr', status: 'skip', kind: 'skipped', reason: '--skip-tests' };
  } else if (report.build.status !== 'fail') {
    report.tests.unit = await runNpmScript('test-unit');
    report.tests.integration = await runNpmScript('test-integr');
  }

  const failed = [
    report.build,
    report.readme,
    report.modules,
    report.tests.unit,
    report.tests.integration,
  ].some((section) => section && section.status === 'fail');
  report.status = failed ? 'fail' : 'pass';

  fs.writeFileSync(args.out, `${JSON.stringify(report, null, 2)}\n`);
  const markdownPath = args.out.replace(/\.json$/i, '.md');
  fs.writeFileSync(markdownPath, renderMarkdown(report));

  console.log(`Wrote ${args.out}`);
  console.log(`Wrote ${markdownPath}`);
  process.exit(report.status === 'pass' ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
