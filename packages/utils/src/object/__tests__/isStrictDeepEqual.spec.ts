import { isStrictDeepEqual } from '../compare/isStrictDeepEqual';

describe('isDeepEqual: null with null', () => {
    /*
        const mockSettings = {};
        const mockOptions = {};
        beforeEach(() => {});
    */
    it('description', () => {
        const result = isStrictDeepEqual(null, null);
        expect(result).toEqual(false);
    });
});
