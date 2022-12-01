# tsx-code-coverage-bug

Code coverage calculations get messed up when using `tsx` instead of `ts-node`.

## repro steps

1. `npm install`
2. `npm test`
3. Note that `thing-to-test.ts` is listed as having an uncovered branch at line 1.
