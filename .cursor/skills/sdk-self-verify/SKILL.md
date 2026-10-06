---
name: sdk-self-verify
description: >-
  Runs the CapMonster Cloud Node.js SDK maintainer self-check before QA: README
  examples, CommonJS and ES Modules functionality, API docs comparison, and a
  structured report. Use when the user asks to verify the SDK, check README
  examples, compare the client with CapMonster API docs, or prepare a change
  for QA.
---

# SDK self-verify

Run this before handing JS SDK changes to QA. Combine the mechanical runner with a docs comparison. Do not treat static code reading as a substitute for an actual command.

## Command

From the repository root:

```bash
npm run self-verify
```

Options for `node tools/self-verify/run.js`:

- `--skip-build` if `dist/` is already current
- `--skip-tests` to skip Jest
- `--live` to hit the real API (needs `CMC_CLIENT_KEY` or `CAPMONSTER_API_KEY`)
- `--live-solve` to also run README `Solve()` examples live
- `--out path/to/report.json`

Mechanical outputs:

- `tools/self-verify/reports/latest.json`
- `tools/self-verify/reports/latest.md`

Then write the full report using [report-template.md](report-template.md). Keep the JSON as evidence.

## Workflow

Copy and track:

```
Self-verify:
- [ ] npm run self-verify
- [ ] README examples: build/run/expected result
- [ ] CommonJS matrix
- [ ] ES Modules matrix
- [ ] Unit + integration tests
- [ ] API docs comparison
- [ ] Final report
```

1. Run `npm run self-verify`. If build fails, stop and report that. Do not claim later steps were executed.
2. Read `tools/self-verify/reports/latest.json`. Every check is `executed`, `analysis`, or `skipped`.
3. Confirm README examples: each fenced `ts` / `js` / `javascript` block was written to `tools/self-verify/tmp/readme-examples/` and actually run. Record exit code, stdout/stderr, and expected result.
4. Confirm module matrix: CJS `require(dist/index.js)` and ESM `import(dist/esm/index.js)` both load, construct every request fixture (including Hunt `widgetUrl` and Alibaba `punishUrl` / `cookieRequired`), call `getBalance` / `Solve`, and cover error paths.
5. Compare the SDK with live API docs. Catalog and field notes are in [reference.md](reference.md) and `tools/self-verify/docs-catalog.json`. Fetch current docs; do not rely only on the catalog.
6. Write the report. Separate code analysis from execution. List unverified scenarios and documentation contradictions in their own sections. Failed checks need reproduction commands and a docs URL.

## Evidence rules

- Executed: a command ran in this session. Quote the command and the result.
- Analysis: source or docs were read, nothing ran. Say so.
- Skipped: missing API key, `--live-solve` not set, build failed, or the scenario cannot be automated. Say why.

Never upgrade analysis or skipped into pass.

## README examples

Source of truth: `README.md` fenced blocks.

For each runnable example record:

- module format (CJS or ESM)
- compile/run command
- expected result (printed `solution`, printed `Balance`, process exit 0)
- actual result
- docs link if the example maps to a task type

Default run uses a local mock (`serviceUrl` injected). Live `Solve()` is skip/unverified unless `--live-solve` and an API key are present.

## Module matrix

Must cover both `dist/index.js` (CommonJS) and `dist/esm/index.js` (ES Modules):

- named exports used in README
- every request class in `tools/self-verify/request-fixtures.js`
- required vs optional fields that the fixture exercises
- createTask payload (`type`, `class`, metadata)
- getBalance success and `KEY_DOES_NOT_EXIST`
- Solve success and `ZERO_BALANCE`
- invalid `websiteURL`

If ESM fails with `ReferenceError: module is not defined`, that is a product defect. Reproduce with:

```bash
node --input-type=module -e "import('./dist/esm/index.js').then(m => m.CapMonsterCloudClientFactory.Create(new m.ClientOptions({ clientKey: 'x' })))"
```

## Docs comparison

Fetch at least:

- https://docs.capmonster.cloud/docs/captchas/
- https://docs.capmonster.cloud/docs/methods/
- Hunt: https://docs.capmonster.cloud/docs/captchas/hunt-task/
- Alibaba: https://docs.capmonster.cloud/docs/captchas/alibaba-task/

For each docs task type, check whether the SDK has a request class, matching required/optional fields, and a response shape. Missing or stale SDK fields are defects. Docs that disagree with each other go under contradictions, not SDK bugs.

## Report

Use [report-template.md](report-template.md). Save under `tools/self-verify/reports/` as `YYYY-MM-DD-self-verify.md` plus `latest.md`.
