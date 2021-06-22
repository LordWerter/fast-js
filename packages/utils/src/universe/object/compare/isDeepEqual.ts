import { TCompareObjects } from './index';

/**
 * isDeepEqual
 * @param {Object} objOne
 * @param {Object} objTwo
 * @returns {boolean}
 */
export const isDeepEqual: TCompareObjects = (objOne, objTwo) => {
    return JSON.stringify(objOne) === JSON.stringify(objTwo);
};

export default isDeepEqual;
