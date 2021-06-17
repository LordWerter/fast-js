import type { Config } from '@jest/types';

import getPreset4ClientApp from './jest.config.client';
import getPreset4Lib from './jest.config.lib';
import getPreset4Server from './jest.config.server';

/**
 * get current preset for Jest Framework
 * @param type {'client' | 'lib' | 'server'}
 * @returns
 */
export const getPreset = (type?: 'client' | 'lib' | 'server'):Config.InitialOptions => {
    switch (type) {
        case 'lib':
            return getPreset4Lib();
        case 'server':
            return getPreset4Server();
        case 'client':
        default:
            return getPreset4ClientApp();
    }
}

export default getPreset;
