import ArrMap from './array';
import DateMap from './date';
import HashMap from './hash';
import NumMap from './number';
import ObjMap from './object';
import StrMap from './string';

export const map = {
    Arr: { ...ArrMap },
    Dates: { ...DateMap },
    Num: { ...NumMap },
    Obj: { ...ObjMap },
    Hash: { ...HashMap },
    Str: { ...StrMap },
};
export const {
    Arr,
    Dates,
    Num,
    Obj,
    Hash,
    Str,
} = map;

export default map;
