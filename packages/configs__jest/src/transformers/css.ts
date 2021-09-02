/**
 * This is a custom Jest transformer turning style imports into empty objects.
 * The output is always the same since an CSS module is just a plain JS object.
 *
 * @type {Object}
 */
export default {
    process() {
        return 'module.exports = {};';
    },
    getCacheKey() {
        return 'cssTransform';
    },
};
