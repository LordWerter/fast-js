module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
    plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread', '@emotion'],
    exclude: '**/*.{spec,test}.{js,jsx,tsx,ts}',
};
