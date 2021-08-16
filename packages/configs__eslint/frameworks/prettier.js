module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['prettier'],
    extends: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        'implicit-arrow-linebreak': 0,
    },
};
