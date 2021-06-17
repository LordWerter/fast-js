"use strict";

const webpack = require('webpack');
const path = require('path');
const WebpackSourceMapPlugin = require('webpack').SourceMapDevToolPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (path2Package) => {
	const arrPlugins = require(path.resolve(__dirname, 'plugins.core.js'))(path2Package);
	const cleanPlugin = new CleanWebpackPlugin({
      verbose: true,
	  dry: false,
	  cleanStaleWebpackAssets: false,
    });
	const sourceMapPlugin = new WebpackSourceMapPlugin({
		filename: '[name].js.map',
		exclude: [/node_modules/]
	});
	const HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin({
		multiStep: true,
	});
	// const analyzerPlugin = new BundleAnalyzerPlugin();

	return [cleanPlugin, ...arrPlugins, sourceMapPlugin, HotModuleReplacementPlugin /*, analyzerPlugin*/];
}
