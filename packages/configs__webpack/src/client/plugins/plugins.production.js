"use strict";

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const CompressionPlugin = require('compression-webpack-plugin');
const ZopfliPlugin = require('@gfx/zopfli');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = (path2Package) => {
	const arrPlugins = require(path.resolve(__dirname, 'plugins.core.js'))(path2Package);

  arrPlugins.push(
		new CompressionPlugin({
				compressionOptions: {
				numiterations: 15
			},
			algorithm(input, compressionOptions, callback) {
				return ZopfliPlugin.gzip(input, compressionOptions, callback);
			}
		}),
		new CleanWebpackPlugin(),
		/** */
		new WorkboxWebpackPlugin.GenerateSW({
			clientsClaim: true,
			exclude: [/\.map$/, /asset-manifest\.json$/],
			navigateFallback: path.resolve(path2Package, 'src/public/index.html'),
			navigateFallbackDenylist: [
			  // Exclude URLs starting with /_, as they're likely an API call
			  new RegExp('^/_'),
			  // Exclude any URLs whose last part seems to be a file extension
			  // as they're likely a resource and not a SPA route.
			  // URLs containing a "?" character won't be blacklisted as they're likely
			  // a route with query params (e.g. auth callbacks).
			  new RegExp('/[^/?]+\\.[^/]+$'),
			],
		  })
		  /** */
  
	);

	return arrPlugins;
};
