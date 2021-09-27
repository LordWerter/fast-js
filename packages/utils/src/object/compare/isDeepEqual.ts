import { TCompareObjects } from './index';
import { isObject } from '../isObject';

/**
 * isDeepEqual
 * @param {Object} objOne
 * @param {Object} objTwo
 * @returns {boolean}
 */
export const isDeepEqual: TCompareObjects<any> = (objOne, objTwo) => {
    if (!isObject(objOne) || !isObject(objOne)) return false;
    return JSON.stringify(objOne) === JSON.stringify(objTwo);
};

export default isDeepEqual;
