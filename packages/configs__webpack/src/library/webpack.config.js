'use strict';

const path = require('path');
const webpack = require('webpack');

const ManifestPlugin = require('webpack-manifest-plugin');



/**
 * imports of constants
 */
 const projectName = require('../../constants/naming').PROJECT_NAME;


module.exports = (path2Package) => {
	const PACKAGE = require(path2Package + '/package.json');
  return {
    mode: '',
    target: 'web',
    cache: false,
    bail: true,
    devtool: '',
    entry: [path2Package + '/src/index.tsx'],
    output: {
      path: path2Package,
      publicPath: '/',
    	filename: 'static/[name].[fullhash].js',
    	chunkFilename: 'static/[name].[chunkhash].chunk.js',
      library: projectName,
      libraryTarget: 'umd'
    },
    resolve: {
      modules: [
        'node_modules',
        path2Package + '/src',
        path2Package + '/../pack__auth/src'
      ],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.mjs']
    },
    module: {
      strictExportPresence: true,
      rules: [
        { parser: { requireEnsure: false } },
				...(require(path.resolve(__dirname, './rules/typescript.js'))(path2Package)),
				...(require(path.resolve(__dirname, './rules/javascript.js'))(path2Package)),
				...(require(path.resolve(__dirname, './rules/files.js'))(path2Package)),
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        name: JSON.stringify(PACKAGE.name),
        version: JSON.stringify(PACKAGE.version),
				'ENV': process.env.NODE_ENV
			}),
			new ManifestPlugin({
				fileName: 'asset-manifest.json',
				publicPath: '/'
      }),
      
		],
		optimization: {
			splitChunks: {
				chunks: 'all'
			},
			removeAvailableModules: true,
			mergeDuplicateChunks: true,
			minimize: true
		}
  };
};
