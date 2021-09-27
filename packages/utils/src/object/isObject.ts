export const isObject = (target: any): boolean => (!!target && target instanceof Object ? true : false);

export const isObjectPromise = (target: any): Promise<boolean> => new Promise((resolve) => resolve(isObject(target)));

export default isObject;
