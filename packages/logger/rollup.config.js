import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];
// Excluded dependencies
const EXTERNAL = Object.keys(pkg.devDependencies);

// const name = 'FastJSUtils';

export default {
  input: 'src/index.tsx',

  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({
      extensions,
      babelHelpers: 'inline',
      include: extensions.map(ext => `src/**/*${ext}`)
    }),
  ],

  output: [{
    dir: "dist",
    sourcemap: false,
    format: "esm",
    preserveModules: true
  }],
  external: EXTERNAL
};