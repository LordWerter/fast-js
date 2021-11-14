import { TCompareObjects } from './index';
import { isObject } from '../isObject';

export const isShallowEqual: TCompareObjects<any> = (objOne, objTwo) => {
    if (!isObject(objOne) || !isObject(objOne)) return false;

    for (let propertyName in objOne) {
        if (objTwo.hasOwnProperty(propertyName)) {
            if (isObject(objOne[propertyName])) objOne[propertyName] = JSON.stringify(objOne[propertyName]);
            if (isObject(objTwo[propertyName])) objTwo[propertyName] = JSON.stringify(objTwo[propertyName]);
            if (objOne[propertyName] !== objTwo[propertyName]) {
                return false;
            }
        } else {
            return false;
        }
    }

    for (let propertyName in objTwo) {
        if (objOne.hasOwnProperty(propertyName)) {
            if (isObject(objOne[propertyName])) objOne[propertyName] = JSON.stringify(objOne[propertyName]);
            if (isObject(objTwo[propertyName])) objTwo[propertyName] = JSON.stringify(objTwo[propertyName]);
            if (objOne[propertyName] !== objTwo[propertyName]) {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;
};

export default isShallowEqual;
