module.exports = {
    env: {
        browser: true,
        jest: true,
        es6: true,
        node: true,
    },
    extends: ['./index.js'],
    globals: {
        React: true,
        google: true,
        mount: true,
        mountWithRouter: true,
        shallow: true,
        shallowWithRouter: true,
        context: true,
        expect: true,
        jsdom: true,
        JSX: true,
    },
    overrides: [
        {
            files: ['*.test.js', '**/__tests__/**'],
            env: {
                jest: true,
            },
        },
        {
            files: ['**/*.stories.*'],
            rules: {
                'import/no-anonymous-default-export': 'off',
            },
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        {
            files: ['**/packages/*/src/*', '**/packages/*/src/**/*'],
            rules: {
                'import/no-commonjs': 2,
            },
        },
    ],
};
