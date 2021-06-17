"use strict";

const path = require('path');

/**
 * Styled-Components tool for development
 * 1. import default from the plugin module
 * 2. create a transformer
 */
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

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
		loader: 'ts-loader',
    options: {}
	};

	if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "staging") {
		tsLoader.options = {
			getCustomTransformers: () => ({
				before: [styledComponentsTransformer]
			})
		};

		sourceMapRules = {
			enforce: 'pre',
			test: /\.js$/,
			loader: 'source-map-loader',
			exclude: [
				/node_modules/
			]
		};
	}

	tsLoader.options.configFile = path.resolve(path2Package, path2TSLintConfig);

	const tsRules = {
		test: /\.ts(x?)$/,
		use: [
			{...tsLoader}
		],
		include: [
			path2Package + '/src',
			path.resolve(path2Package, '../pack__auth/src')
		],
		exclude: /\.stories.*$/
	};

	tsRules.use.push(coreReplacements);

	if (process.env.NODE_ENV === "production") {
		tsRules.use.push(productionReplacements);
	}

	const tslintRules = {
		test: /\.ts(x?)$/,
		enforce: 'pre',
		loader: 'tslint-loader',
		exclude: [/node_modules/, /\.stories.*$/],
		options: {
			tsConfig: path2TSLintConfig
		},
		include: path2Package + '/src',
	};

	return [tsRules, tslintRules, sourceMapRules].filter(p => p);
};
