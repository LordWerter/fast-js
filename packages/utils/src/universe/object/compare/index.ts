import isDeepEqual from './isDeepEqual';
import isPartOf from './isPartOf';
import isShallowEqual from './isShallowEqual';
import isStrictDeepEqual from './isStrictDeepEqual';
import isStrictShallowEqual from './isStrictShallowEqual';

export type TCompareObjects = (objOne: Object, objTwo: Object) => boolean;

export default {
    isDeepEqual,
    isStrictDeepEqual,
    isPartOf,
    isShallowEqual,
    isStrictShallowEqual,
};
