# tsx-code-coverage-bug

Code coverage calculations get messed up when using `tsx` instead of `ts-node`.

## repro steps

1. `npm start` (which runs `npm i` and `npm test`)
2. Note that `thing-to-test.ts` is listed as having an uncovered branch at line 1. However, line 1 of `thing-to-test.ts`, `export function doThing() {`, has no branches.
