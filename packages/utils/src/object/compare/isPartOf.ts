import { TCompareObjects } from './index';
import { isObject } from '../isObject';
export interface IObj {
    [prop: string]: number | string | boolean | Object | null;
}

export const isPartOf: TCompareObjects<any> = (objOne, objTwo) => {
    if (!isObject(objOne) || !isObject(objOne)) return false;

    for(let propertyName in objOne){
        if(objTwo.hasOwnProperty(propertyName)){
            if(isObject(objOne[propertyName])) objOne[propertyName]=JSON.stringify(objOne[propertyName]);
            if(isObject(objTwo[propertyName])) objTwo[propertyName]=JSON.stringify(objTwo[propertyName]);
            if(objOne[propertyName] !== objTwo[propertyName]){
                return false;
            }
        }
    }
    return true;
};

export default isPartOf;
