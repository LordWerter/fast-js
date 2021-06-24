import { hasObjectProperty } from './hasObjectProperty';
import mergeDeep from './mergeDeep';
import isNotEmptyObject from './isNotEmptyObject';
import { isObjectPropEqualTo } from './isObjectPropEqualTo';
import compare from './compare';
import specifyObjectType from './specifyObjectType';

export default {
    hasObjectProperty,
    mergeDeep,
    isNotEmptyObject,
    isObjectPropEqualTo,
    ...compare,
    specifyObjectType,
};