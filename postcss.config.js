const purgecss = require('@fullhuman/postcss-purgecss').default || require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    purgecss({
      content: ['./src/*.html', './src/scripts/**/*.js'],
      safelist: []
    }),
    require('autoprefixer'),
    require('cssnano')({ preset: 'default' })
  ]
};
