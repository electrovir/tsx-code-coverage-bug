/** @type {import('mocha').MochaOptions} */
const mochaConfig = {
  spec: [`src/**/*.test.ts`],

  require: ['tsx'],

  //   // try it with ts-node to see that there is no missing coverage
  //   require: ['ts-node/register'],
};

module.exports = mochaConfig;
