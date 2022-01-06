import type { Config } from '@jest/types';

export const getPreset4ClientApp = (): Config.InitialOptions => {
    return {
        preset: 'ts-jest',
        testPathIgnorePatterns: [
            '<rootDir>/.storybook',
            '<rootDir>/build',
            '<rootDir>/config',
            '<rootDir>/coverage',
            '<rootDir>/node_modules',
            '<rootDir>/public',
            '<rootDir>/.stryker-tmp',
        ],
        collectCoverage: true,
        coverageDirectory: 'coverage',
    };
};

export default getPreset4ClientApp;
