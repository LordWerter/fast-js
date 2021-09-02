import electron from './electron';
import universe from './universe';

export { default as Arr } from './universe/array';
export { default as Dates } from './universe/date';
export { default as hash } from './universe/hash';
export { default as Num } from './universe/number';
export { default as Obj } from './universe/object';
export { default as Str } from './universe/string';

export default {
    ...electron,
    ...universe,
};
