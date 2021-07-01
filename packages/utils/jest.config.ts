import type { Config } from '@jest/types';
import getPreset from '@fast-js/jest';

const preset = getPreset('lib');
export default (): Config.InitialOptions => {
    return {
        ...preset,
    };
};
