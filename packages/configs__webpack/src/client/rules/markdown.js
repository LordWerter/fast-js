'use strict';

const path = require('path');
const MarkdownLoader = require.resolve('markdown-loader');
const HTMLLoader = require.resolve('html-loader');


module.exports = (path2Package) => {
	const mdRules = {
		test: /\.md$/,
		use: [
			{
				loader: HTMLLoader,
			},
			{
				loader: MarkdownLoader,
				options: {
				}
			}
		]
	};

	return [mdRules].filter(p => p);
};
