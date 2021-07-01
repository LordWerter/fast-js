import { TCompareObjects } from './index';
import { isObject } from '../isObject';

/**
 * 
 * @param objOne 
 * @param objTwo 
 * @returns 
 */
export const isStrictDeepEqual: TCompareObjects<any> = (objOne, objTwo) => {

    if (!isObject(objOne) || !isObject(objOne)) return false;

    const __checkProps = (objOne, objTwo) => {
        for (let propertyName in objOne) {
            if (objTwo.hasOwnProperty(propertyName)) {
                if (isObject(objOne[propertyName])) {
                    if (!isStrictDeepEqual(objOne[propertyName], objTwo[propertyName])) {
                        return false;
                    }
                } else if (objOne[propertyName] !== objTwo[propertyName]) {
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    const leftEqual = __checkProps(objOne, objTwo);
    if (!leftEqual) return false;

    const rightEqual = __checkProps(objTwo, objOne);
    if (!rightEqual) return false;

    return true;
};

export default isStrictDeepEqual;
