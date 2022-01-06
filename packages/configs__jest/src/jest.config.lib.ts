import type { Config } from '@jest/types';

export const getPreset4Lib = (): Config.InitialOptions => {
    return {
        preset: 'ts-jest',
        testPathIgnorePatterns: [
            '<rootDir>/build/',
            '<rootDir>/dist/',
            '<rootDir>/.storybook/',
            '<rootDir>/public/',
            '<rootDir>/assets/',
            '<rootDir>/config/',
            '<rootDir>/coverage/',
            '<rootDir>/node_modules/',
            '<rootDir>/*/__mocks__/',
        ],
        moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
        collectCoverage: true,
        coverageDirectory: 'coverage',
    };
};

export default getPreset4Lib;
