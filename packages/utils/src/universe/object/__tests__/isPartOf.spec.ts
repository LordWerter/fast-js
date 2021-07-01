import { isPartOf } from '../compare/isPartOf';

describe('isDeepEqual: null with null', () => {
    /*
        const mockSettings = {};
        const mockOptions = {};
        beforeEach(() => {});
    */
    it('description', () => {
        const result = isPartOf(null, null);
        expect(result).toEqual(false);
    });
});
