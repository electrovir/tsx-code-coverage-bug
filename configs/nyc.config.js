const percent = 100;

const nycConfig = {
  extends: '@istanbuljs/nyc-config-typescript',
  checkCoverage: true,

  branches: percent,
  functions: percent,
  lines: percent,
  statements: percent,

  exclude: ['**/*.test.ts'],
  include: ['src/**/*.ts'],
  tempDir: './node_modules/.nyc-output/',
};

module.exports = nycConfig;
