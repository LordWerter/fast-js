import type { Config } from '@jest/types';
import getPreset from '../configs__jest/src/index';

const preset = getPreset();
export default (): Config.InitialOptions => {
    return {
        ...preset,
    };
};
