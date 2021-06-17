const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = () => {
    return [
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
                {
                    loader: ImageMinimizerPlugin.loader,
                    options: {
                        filter: (source) => {
                            // The `source` argument is a `Buffer` of source file
                            // The `sourcePath` argument is an absolute path to source
                            if (source.byteLength < 8192) {
                                return false;
                            }

                            return true;
                        },
                    },
                },
            ],
            enforce: 'pre',
        },
        {
            test: /\.(jpeg|jpg|png|svg?)(\?[a-z0-9=&.]+)?$/,
            type: 'asset/inline',
        },
        {
            test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            type: 'asset/resource',
        },
    ];
};
