import { isDeepEqual } from '../compare/isDeepEqual';

describe('isDeepEqual: null with null', () => {
    /*
        const mockSettings = {};
        const mockOptions = {};
        beforeEach(() => {});
    */
    it('description', () => {
        const result = isDeepEqual(null, null);
        expect(result).toEqual(false);
    });
});
