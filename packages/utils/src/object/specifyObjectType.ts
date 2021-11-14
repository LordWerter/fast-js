/**
 * specifyObjectType Function
 * @param {Object} targetObj 
 * @returns {'null' | 'array' | 'object'}
 */
export const specifyObjectType = (targetObj: Object) =>
    targetObj === null ? 'null' : Array.isArray(targetObj) ? 'array' : 'object';

export default specifyObjectType;
