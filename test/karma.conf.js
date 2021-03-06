require('babel-register')
const webpack = require('../webpack.config.babel.js')
const path = require('path')

webpack.module.loaders.push({
  test: /\.jsx?$/,
  loader: 'isparta',
  include: path.resolve(__dirname, '../src')
})

module.exports = function (config) {
  config.set({
    basePath: '../',
    frameworks: ['mocha', 'chai-sinon'],
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      reporters: [
        {type: 'lcov', subdir: '.'},
        {type: 'text-summary'},
        {
          type: 'html',
          dir: 'coverage',
          subdir: '.'
        }
      ]
    },

    browsers: ['Chrome'],

    files: [
      'test/browser/**/*.js'
    ],

    preprocessors: {
      'test/**/*.js': ['webpack'],
      'src/**/*.js': ['webpack'],
      '**/*.js': ['sourcemap']
    },

    webpack: webpack,
    webpackMiddleware: {noInfo: true}
  })
}
