'use strict';

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (path2Package, targetPath) => {
    const arrPlugins = require(path.resolve(__dirname, 'plugins.core.js'))(path2Package, targetPath);

    const cleanPlugin = new CleanWebpackPlugin({
        verbose: true,
        dry: false,
        cleanStaleWebpackAssets: false,
    });
    // const analyzerPlugin = new BundleAnalyzerPlugin();

    return [cleanPlugin, ...arrPlugins];
};
