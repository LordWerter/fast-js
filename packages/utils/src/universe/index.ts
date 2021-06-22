import array from './array';
import date from './date';
import hash from './hash';
import number from './number';
import object from './object';
import string from './string';

export default {
    ...array,
    ...date,
    ...number,
    ...object,
    ...hash,
    ...string,
};
