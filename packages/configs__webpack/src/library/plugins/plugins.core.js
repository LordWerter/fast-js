"use strict";

/**
 * Packages
 */
const path = require('path');
const resolve = require('resolve');
const WebpackNotifierPlugin = require("webpack-notifier");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');

module.exports = (path2Package) => {
	const envStatus = process.env.NODE_ENV === 'production' ? 'build' : 'dev-build';
	const isEnvDevelopment = envStatus === 'dev-build';
	const isEnvProduction = envStatus === 'build';

	const arrPlugins = [
		new WebpackNotifierPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'public/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
			ignoreOrder: false, // Enable to remove warnings about conflicting order
	  
		}),
		new CopyWebpackPlugin({
			patterns: [
			{
				from: path.resolve(path2Package, 'src/assets/images'),
				to: path.resolve(path2Package, `../../dist/client/${envStatus}/images`),
			},
			{
				from: path.resolve(path2Package, 'public/favicon'),
				to: path.resolve(path2Package, `../../dist/client/${envStatus}/favicon`),
			},
			{
				from: path.resolve(path2Package, 'public/robots.txt'),
				to: path.resolve(path2Package, `../../dist/client/${envStatus}/robots.txt`),
			}
		]}),
		new ForkTsCheckerWebpackPlugin({
			typescript: resolve.sync('typescript', {
			  basedir:  path.resolve(__dirname, '../../../../../node_modules'),
			}),
			async: isEnvDevelopment,
			useTypescriptIncrementalApi: true,
			checkSyntacticErrors: true,
			resolveModuleNameModule: process.versions.pnp
			  ? `${__dirname}/pnpTs.js`
			  : undefined,
			resolveTypeReferenceDirectiveModule: process.versions.pnp
			  ? `${__dirname}/pnpTs.js`
			  : undefined,
			tsconfig: path.resolve(path2Package, `tsconfig.${isEnvProduction ? 'prod' : 'dev'}.json`),
			reportFiles: [
			  '**',
			  '!**/__tests__/**',
			  '!**/?(*.)(spec|test).*',
			  '!**/src/setupProxy.*',
			  '!**/src/setupTests.*',
			],
			silent: true,
			// The formatter is invoked directly in WebpackDevServerUtils during development
			formatter: isEnvProduction ? typescriptFormatter : undefined,
		  }),  
	];
	return arrPlugins;
}
