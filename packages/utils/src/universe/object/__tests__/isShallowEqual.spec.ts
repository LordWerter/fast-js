import { isShallowEqual } from '../compare/isShallowEqual';

describe('isDeepEqual: null with null', () => {
    /*
        const mockSettings = {};
        const mockOptions = {};
        beforeEach(() => {});
    */
    it('description', () => {
        const result = isShallowEqual(null, null);
        expect(result).toEqual(false);
    });
});
