import { isObjectPromise } from './isObject';

export const isNotEmptyObject = (target: Object): boolean => (Object.keys(target).length ? true : false);

export const isNotEmptyObjectPromise = (target: Object): Promise<boolean> =>
    new Promise((resolve) => resolve(isNotEmptyObject(target)));

export const check2IsNotEmptyObject = (target: any): Promise<boolean> =>
    isObjectPromise(target).then((isObjRes: any) => {
        return isNotEmptyObject(isObjRes);
    });

export default isNotEmptyObject;
