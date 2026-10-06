import { createRequire } from 'module';

type RequireFn = (id: string) => unknown;

const PACKAGE_NAME = '@zennolab_com/capmonstercloud-client';

function getModuleFilename(): string {
  if (typeof __filename !== 'undefined') {
    return __filename;
  }

  // Dual CJS/ESM source: tsc cannot emit import.meta in the CommonJS build.
  // js-fix-esm-imports.js rewrites this eval() to import.meta.url in dist/esm.
  // eslint-disable-next-line no-eval
  return eval('import.meta.url') as string;
}

function getRuntimeRequire(): RequireFn {
  if (typeof require === 'function') {
    return require;
  }

  return createRequire(getModuleFilename());
}

/**
 * Loads a Node.js module in both CommonJS and ESM builds.
 */
export function nodeRequire<T = unknown>(id: string): T {
  return getRuntimeRequire()(id) as T;
}

/**
 * Reads this package version from package.json for both dist/ and dist/esm/ layouts.
 */
export function readOwnPackageVersion(): string {
  const candidates = ['../package.json', '../../package.json'];

  for (const candidate of candidates) {
    try {
      const pkg = nodeRequire<{ name?: string; version?: string }>(candidate);
      if (pkg && pkg.name === PACKAGE_NAME && typeof pkg.version === 'string') {
        return pkg.version;
      }
    } catch {
      // CJS emits to dist/, ESM emits to dist/esm/.
    }
  }

  return 'ProductVersion';
}
