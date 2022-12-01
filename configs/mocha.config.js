const SpecReporterWithFileNames = require('mocha-spec-reporter-with-file-names');

/** @type {import('mocha').MochaOptions} */
const mochaConfig = {
    checkLeaks: true,
    color: true,
    parallel: true,
    slow: 1_500, // ms
    fullTrace: true,
    timeout: 60_000, // 1 minute in ms
    reporter: SpecReporterWithFileNames.pathToThisReporter,
    spec: [`src/**/!(*.type).test.ts?(x)`],

    require: ['tsx'],
};

module.exports = mochaConfig;
