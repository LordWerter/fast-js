'use strict';

const TerserPlugin = require('terser-webpack-plugin');

module.exports = (path2Package, targetPath) => {
    const config = require('./webpack.client.config')(path2Package);

    config.mode = 'production';
    config.output.path = targetPath;
    config.plugins = [
        ...(config.plugins),
        ...(require('./plugins/plugins.production')(path2Package)),
    ];
    config.optimization = {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    parse: {
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    keep_classnames: false,
                    keep_fnames: false,
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true,
                    },
                },
                parallel: false,
            }),
        ],
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
        runtimeChunk: true,
    };
    config.performance = {
        hints: 'warning',
    };

    return config;
};
