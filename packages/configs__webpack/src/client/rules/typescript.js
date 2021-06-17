'use strict';

const path = require('path');

const TSLoaderPackage = require.resolve('ts-loader');
const SourceMapLoader = require.resolve('source-map-loader');
const ConditionalLoader = require.resolve('webpack-conditional-loader');
/**
 * Styled-Components tool for development
 * 1. import default from the plugin module
 * 2. create a transformer
 */

const coreReplacements = require('../replacements/replacements.core');
const productionReplacements = require('../replacements/replacements.production');

module.exports = (path2Package) => {
    let sourceMapRules = null;

    let path2TSLintConfig = '';

    switch (process.env.NODE_ENV) {
        case 'production':
            path2TSLintConfig = 'tsconfig.prod.json';
            break;
        case 'development':
            path2TSLintConfig = 'tsconfig.dev.json';
            break;
    }

    const tsLoader = {
        loader: TSLoaderPackage,
        options: {
        },
    };

    if (process.env.NODE_ENV === 'development') {
        sourceMapRules = {
            enforce: 'pre',
            test: /\.js$/,
            loader: SourceMapLoader,
            exclude: [
                /node_modules/,
            ],
        };
    }

    tsLoader.options.configFile = path.resolve(path2Package, path2TSLintConfig);

    const tsRules = {
        test: /\.ts(x?)$/,
        use: [
            {
                ...tsLoader,
            },
        ],
        include: [
            `${path2Package}/src`,
            path.resolve(path2Package, '../service__websocket/src'),
            path.resolve(path2Package, '../service__logbuilder/src'),
            path.resolve(path2Package, '../ui__components/src'),
            path.resolve(path2Package, '../ui__themes/src'),
            path.resolve(path2Package, '../utils/src'),
        ],
    };

    tsRules.use.push(coreReplacements);

    if (process.env.NODE_ENV === 'production') {
        tsRules.use.push(productionReplacements);
    }
    tsRules.use.push({
        loader: ConditionalLoader,
    })

    return [tsRules, sourceMapRules].filter(p => p);
};
