module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['prettier'],
    extends: ['prettier', 'prettier/react'],
    rules: {
        'prettier/prettier': 'error',
        'implicit-arrow-linebreak': 0,
    },
};
