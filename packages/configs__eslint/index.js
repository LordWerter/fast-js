module.exports = {
    extends: [
        './base/errors',
        './base/es6',
//        './base/imports',
        './base/node',
        './base/practices',
        './base/stylistic',
        './base/variables',
        './frameworks/jest',
//        './frameworks/typescript',
        './frameworks/prettier',
        './frameworks/prettier-typescript',
        './frameworks/react',
        './frameworks/react-hooks',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {},
};