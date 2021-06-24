import {check2IsNotEmptyObject} from './isNotEmptyObject';

export type THasObjectProperty = (target: Object, propName: string) => Promise<boolean> | boolean;

export const hasObjectProperty: THasObjectProperty = (target, propName) => Object.prototype.hasOwnProperty.call(target, propName) ? true : false;

export const hasObjectPropertyPromise: THasObjectProperty = (target, propName) => new Promise(resolve => resolve(hasObjectProperty(target, propName)));

export const checkToHasObjectProperty: THasObjectProperty = (target, propName) => check2IsNotEmptyObject(target).then(() => hasObjectProperty(target, propName));