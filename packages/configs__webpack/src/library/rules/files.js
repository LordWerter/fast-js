"use strict";

module.exports = () => {
	return [{
		test: /\.woff$|\.woff2?$|\.ttf$|\.eot$|\.otf$/,
		loader: 'file-loader',
		options: {
			name: 'fonts/[name].[ext]',
			outputPath: 'fonts/'
		},
	},
	{
		test: /\.(png|svg|jpg|gif)$/,
		loader: 'file-loader',
		options: {
			name: 'images/[name].[ext]',
			outputPath: 'images/'
		},
	},
	];
}