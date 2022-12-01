import {describe} from 'mocha';
import {doThing} from './thing-to-test';

describe(doThing.name, () => {
    it('should be callable', () => {
        doThing();
    });
});
