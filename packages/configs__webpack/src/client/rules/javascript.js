"use strict";

const path = require('path');
const BabelLoader = require.resolve('babel-loader');

module.exports = (path2Package) => {
	return [
		{
			test: /\.(js|jsx)$/,
			use: [
				BabelLoader,
			],
			include: [
				path2Package + '/src',
				path.resolve(path2Package, '../ui_system/src'),
				path.resolve(path2Package, '../service__logfactory/src'),
			],
			exclude: /\.stories.*$/
		},
		{
			test: /\.mjs$/,
			include: /node_modules/,
			type: "javascript/auto",
		}
	]
}
