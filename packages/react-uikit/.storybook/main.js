module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-backgrounds',
        '@storybook/addon-knobs',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null,
            },
        },
        '@storybook/addon-actions',
        '@storybook/addon-storysource',
        '@storybook/addon-controls',
        '@storybook/addon-viewport',
    ],
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
    /*
    webpackFinal: async (config, { configType }) => {
        config.resolve.modules.push(path.resolve(__dirname, `../../utils/src`));
        config.module.rules[0].include.push(path.resolve(__dirname, '../../utils'));
        config.module.rules[6].include = [path.resolve(__dirname, '../../utils')];
        config.module.rules[0].test = /\.(mjs|ts(x?)|js(x?))$/;
        config.module.rules[6].test = /\.stories\.(js(x?)|ts(x?))$/;
        return config;
    },
    */
};
