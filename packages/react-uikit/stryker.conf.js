/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
    packageManager: 'npm',
    reporters: ['html', 'clear-text', 'progress'],
    testRunner: 'jest',
    coverageAnalysis: 'perTest',
    jest: {
        configFile: './jest.config.ts',
        enableFindRelatedTests: true,
    },
    checkers: ['typescript'],
};
