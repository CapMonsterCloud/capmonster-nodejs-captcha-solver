/* eslint @typescript-eslint/no-var-requires: 0 */
const fs = require('fs');
const path = require('path');

const esmDir = path.join(__dirname, 'dist', 'esm');

function walk(dir) {
  return fs.readdirSync(dir).flatMap((entry) => {
    const fullPath = path.join(dir, entry);
    return fs.statSync(fullPath).isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function resolveImportPath(filePath, importPath) {
  if (!importPath.startsWith('.')) {
    return importPath;
  }

  const absoluteTarget = path.resolve(path.dirname(filePath), importPath);
  if (fs.existsSync(`${absoluteTarget}.js`)) {
    return `${importPath}.js`;
  }

  if (fs.existsSync(path.join(absoluteTarget, 'index.js'))) {
    return `${importPath}/index.js`;
  }

  return importPath;
}

function fixImports(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const fixed = source.replace(/(from\s+['"])([^'"]+)(['"])/g, (_, prefix, importPath, suffix) => {
    return `${prefix}${resolveImportPath(filePath, importPath)}${suffix}`;
  });
  fs.writeFileSync(filePath, fixed);
}

if (fs.existsSync(esmDir)) {
  walk(esmDir)
    .filter((filePath) => filePath.endsWith('.js'))
    .forEach(fixImports);
}
