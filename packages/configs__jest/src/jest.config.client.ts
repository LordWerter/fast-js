import type { Config } from '@jest/types';

export const getPreset4ClientApp = (): Config.InitialOptions => {
    return {
        testEnvironment: 'jsdom',
        testRegex: '[\\s\\S]*/__tests__/[\\s\\S]*(test?|spec?).(ts?|tsx?)$',
        testPathIgnorePatterns: [
            '<rootDir>/.storybook',
            '<rootDir>/build',
            '<rootDir>/config',
            '<rootDir>/coverage',
            '<rootDir>/node_modules',
            '<rootDir>/public',
            '<rootDir>/.stryker-tmp',
        ],
        moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
        snapshotSerializers: [],
        collectCoverage: true,
        collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
        modulePaths: ['<rootDir>/node_modules'],
        globals: {
            window: true,
            snapshot: false,
            'ts-jest': {
                tsconfig: '<rootDir>/test.tsconfig.json',
            },
        },
    };
};

export default getPreset4ClientApp;
