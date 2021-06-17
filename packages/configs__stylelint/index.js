import {default as ExtendPatterns} from './src/extends';
import {default as Processors} from './src/processors';
import {default as Rules} from './src/rules';


export default {
    extends: [ ...ExtendPatterns ],
    plugins: [...Plugins],
    processors: [ ...Processors ],
    rules: { ...Rules }
};
