import type { Config } from '@jest/types';

export const getPreset4Server = (): Config.InitialOptions => {
    return {
        preset: 'ts-jest',
        testPathIgnorePatterns: [
            '<rootDir>/build/',
            '<rootDir>/config/',
            '<rootDir>/coverage/',
            '<rootDir>/node_modules/',
            '<rootDir>/src/__mocks__',
        ],
        moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
        collectCoverage: true,
        coverageDirectory: 'coverage',
    };
};

export default getPreset4Server;
