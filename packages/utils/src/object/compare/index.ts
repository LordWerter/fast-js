import isDeepEqual from './isDeepEqual';
import isPartOf from './isPartOf';
import isShallowEqual from './isShallowEqual';
import isStrictDeepEqual from './isStrictDeepEqual';

export interface IObj<T> {
    [prop: string]: T;
}

export type TCompareObjects<T> = (objOne: IObj<T>, objTwo: IObj<T>) => boolean;

export default {
    isDeepEqual,
    isStrictDeepEqual,
    isPartOf,
    isShallowEqual,
};
