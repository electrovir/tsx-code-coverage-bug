/** @type {import('mocha').MochaOptions} */
const mochaConfig = {
  spec: [`src/**/*.test.ts`],

  require: ['tsx'],
};

module.exports = mochaConfig;
