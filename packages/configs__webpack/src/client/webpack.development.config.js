'use strict';

const path = require('path');

module.exports = (path2Package, targetPath) => {
    const config = require('./webpack.client.config.js')(path2Package);

    config.mode = 'development';
    config.cache = {
        type: 'memory',
    };
    config.bail = false;
    config.devtool = 'eval-cheap-module-source-map';
    config.output.path = targetPath;
    config.plugins = [
        ...(config.plugins),
        ...(require('./plugins/plugins.dev')(path2Package, targetPath)),
    ];
    config.performance = {
        hints: false,
    };

    config.devServer = {
        historyApiFallback: true,
        contentBase: path.resolve(path2Package, './dist/dev-build/index.html'),
        compress: true,
        port: 9000,

        hot: true,
    };

    return config;
};
