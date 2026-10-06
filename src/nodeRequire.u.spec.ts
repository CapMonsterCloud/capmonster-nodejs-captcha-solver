import { readOwnPackageVersion } from './nodeRequire';

const { version, name } = require('../package.json'); // eslint-disable-line @typescript-eslint/no-var-requires

describe('nodeRequire helpers', () => {
  it('reads this package version from package.json', () => {
    expect(name).toBe('@zennolab_com/capmonstercloud-client');
    expect(readOwnPackageVersion()).toBe(version);
  });
});
