'use strict';

/**
 * StringReplace plugin is for all replacements in code
 */
const StringReplacePlugin = require('string-replace-webpack-plugin');

module.exports = StringReplacePlugin.replace({
    replacements: [
        {
            pattern: /#WS_SERVER_URL#/gi,
            replacement: () => {
                const curMode = process.env.NODE_ENV;

                switch (curMode) {
                    case 'production':
                        return 'localhost:8080';
                    case 'development':
                        return '10.94.78.175:8080';
                }
            },
        },
        {
            pattern: /#BESTSHOT_SERVER_URL#/gi,
            replacement: () => {
                const curMode = process.env.NODE_ENV;

                switch (curMode) {
                    case 'production':
                        return 'localhost:8080';
                    case 'development':
                        return '10.94.78.175:8080';
                }
            },
        },
        {
            pattern: /#SETTINGS_SERVER_URL#/gi,
            replacement: () => {
                const curMode = process.env.NODE_ENV;

                switch (curMode) {
                    default:
                        return 'localhost:8851';
                }
            },
        },
        {
            pattern: /#MONITORING_SERVER_URL#/gi,
            replacement: () => {
                const curMode = process.env.NODE_ENV;

                switch (curMode) {
                    default:
                        return 'localhost:8852';
                }
            },
        },
    ],
});
