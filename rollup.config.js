import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';

export default {
  input: 'public/js/index.js',
  output: {
    file: 'public/js/bundle.js',
    format: 'iife'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    eslint({
      include: './public/js/**',
      exclude: './public/js/bundle.js',
    }),
  ],
};