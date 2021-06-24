import electron from './src/electron';
import universe from './src/universe';

export { default as Arr } from './src/universe/array';
export { default as Dates } from './src/universe/date';
export { default as hash } from './src/universe/hash';
export { default as Num } from './src/universe/number';
export { default as Obj } from './src/universe/object';
export { default as Str } from './src/universe/string';

export default {
    ...electron,
    ...universe,
};
