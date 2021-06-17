"use strict";
const MiniCssExtractPlugin =

module.exports = () => {
	const autoprefixer = {
    browsers: [
      '>1%',
      'last 4 versions',
      'Firefox ESR',
      'iOS >= 7',
      'not ie < 9'
    ],
    flexbox: 'no-2009'
  };

  return [{
      test: /\.css$/,
      use: [
        (
          isDevelopment || isStorybook
        ) ? require.resolve('style-loader') : MiniCssExtractPlugin.loader,
        {
          loader: require.resolve('css-loader'),
          options: {
            minimize: isProduction,
            sourceMap: true
          }
        },
				{
					loader: require.resolve('postcss-loader'),
					options: {
						minimize: isProduction,
						sourceMap: true,
						ident: 'postcss',
						plugins: () => [
							require('postcss-flexbugs-fixes'),
							require('autoprefixer')(autoprefixer)
						]
					}
				}
      ]
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
				{
					loader: require.resolve('postcss-loader'),
					options: {
						minimize: isProduction,
						sourceMap: true,
						ident: 'postcss',
						plugins: () => [
							require('postcss-flexbugs-fixes'),
							require('autoprefixer')(autoprefixer)
						]
					}
				},
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }
  ];
}
