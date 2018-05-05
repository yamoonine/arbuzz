import babel        from 'rollup-plugin-babel';
import eslint       from 'rollup-plugin-eslint';
import uglify       from 'rollup-plugin-uglify';
import sass         from 'rollup-plugin-sass';
import autoprefixer from 'autoprefixer';
import postcss      from 'postcss';

export default {
  input: 'public/js/index.js',
  output: {
    file: 'public/js/bundle.js',
    format: 'iife'
  },
  plugins: [
    sass({
      output: './public/css/bundle.css',
      processor: css => postcss([autoprefixer])
        .process(css)
        .then(result => result.css),
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    (process.env.BUILD !== 'on' && eslint({
      include: './public/js/**',
      exclude: ['./public/js/bundle.js', './public/sass/**'],
    })),
    (process.env.BUILD === 'on' && uglify()),
  ],
};