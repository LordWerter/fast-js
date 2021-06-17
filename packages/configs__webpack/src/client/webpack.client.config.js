'use strict';

const path = require('path');
const webpack = require('webpack');
/**
 * imports of constants
 */
const projectName = require('../constants/naming').PROJECT_NAME;

module.exports = (path2Package, targetPath) => {
    const PACKAGE = require(`${path2Package}/package.json`);

    return {
        mode: '',
        target: 'web',
        cache: false,
        bail: true,
        entry: [`${path2Package}/src/index.tsx`],
        output: {
            path: targetPath,
            publicPath: '',
            filename: 'static/[name].[fullhash].js',
            chunkFilename: 'static/[name].[chunkhash].chunk.js',
            library: projectName,
            libraryTarget: 'umd',
        },
        resolve: {
            modules: [
                'node_modules',
                `${path2Package}/src`,
                `${path2Package}/../service__websocket/src`,
                `${path2Package}/../service__logbuilder/src`,
                `${path2Package}/../ui__components/src`,
                `${path2Package}/../ui__themes/src`, 
                `${path2Package}/../utils/src`,
            ],
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.mjs'],
        },
        module: {
            strictExportPresence: true,
            rules: [
                { parser: { requireEnsure: false } },
                ...(require(path.resolve(__dirname, './rules/typescript.js'))(path2Package)),
                ...(require(path.resolve(__dirname, './rules/javascript.js'))(path2Package)),
                ...(require(path.resolve(__dirname, './rules/files.js'))(path2Package)),
                ...(require(path.resolve(__dirname, './rules/css.js'))(path2Package)),
                ...(require(path.resolve(__dirname, './rules/markdown.js'))(path2Package)),
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                name: JSON.stringify(PACKAGE.name),
                version: JSON.stringify(PACKAGE.version),
                ENV: process.env.NODE_ENV,
            }),
        ],
        experiments: {
            asset: true,
        },
    };
};
