'use strict';

module.exports = {
	preset: '../configs/testing/jest.config.client.js',
	transform: {
		"^[ \\(\\)./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|otf|png|psd|svg|webp)$": "<rootDir>/jest/mediaFileTransformer.js"
	},
	globals: {
		WavesKeeper: {},
	},
};
