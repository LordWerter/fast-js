import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import pkg from './package.json';
import path from 'path';

const extensions = ['.js', '.ts', '.tsx'];

export default [
    {
        input: './src/index.ts',
        output: {
            file: pkg.main,
            format: 'esm',
            plugins: [
                getBabelOutputPlugin({
                    configFile: path.resolve(__dirname, '.babelrc.js'),
                }),
            ],
        },
        plugins: [
            resolve({
                extensions,
            }),
            commonjs({
                include: /node_modules/,
            }),
            babel({
                extensions,
                babelrc: true,
                babelHelpers: 'bundled',
                include: [
                    './src/**/*'
                ],
            }),
        ],
    },
];
