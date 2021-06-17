const CSSLoader = require.resolve('css-loader');
const SASSLoader = require.resolve('sass-loader');
const StyleLoader = require.resolve('style-loader');
const PostCSSLoader = require.resolve('postcss-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (path2Package) => {
    const autoprefixer = {
        browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'iOS >= 7',
            'not ie < 9',
        ],
        flexbox: 'no-2009',
    };
    const isProduction = process.env.NODE_ENV === 'production';
    const isDevelopment = process.env.NODE_ENV === 'development';
    const isStorybook = process.env.NODE_ENV === 'development';
    console.log(process.env.NODE_ENV);

    return [{
        test: /\.css$/,
        use: [
            (
                isDevelopment || isStorybook
            ) ? StyleLoader : MiniCssExtractPlugin.loader,
            {
                loader: CSSLoader,
                options: {
                    minimize: isProduction,
                    sourceMap: true,
                },
            },
            {
                loader: PostCSSLoader,
                options: {
                    minimize: isProduction,
                    sourceMap: true,
                    ident: 'postcss',
                    plugins: () =>
                        [
                            require('postcss-flexbugs-fixes'),
                            require('autoprefixer')(autoprefixer),
                        ],
                },
            },
        ],
    },
    {
        test: /\.scss$/,
        use: [
            StyleLoader,
            {
                loader: CSSLoader,
                options: {
                    sourceMap: true,
                },
            },
            {
                loader: PostCSSLoader,
                options: {
                    minimize: isProduction,
                    sourceMap: true,
                    ident: 'postcss',
                    plugins: () =>
                        [
                            require('postcss-flexbugs-fixes'),
                            require('autoprefixer')(autoprefixer),
                        ],
                },
            },
            {
                loader: SASSLoader,
                options: {
                    sourceMap: true,
                },
            },
        ],
    },
    ];
};
