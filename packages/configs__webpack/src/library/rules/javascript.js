"use strict";

const path = require('path');

module.exports = (path2Package) => {
	return [
		{
			test: /\.(js|jsx)$/,
			use: [
				'babel-loader',
			],
			include: [
				path2Package + '/src',
				path.resolve(path2Package, '../ui_system/src')
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
