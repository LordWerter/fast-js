'use strict';

const path = require('path');

module.exports = () => {
	const mdRules = {
		test: /\.md$/,
		loaders: [
		'markdown-loader',
		'html-loader'
		],
	};

	return [mdRules].filter(p => p);
};
