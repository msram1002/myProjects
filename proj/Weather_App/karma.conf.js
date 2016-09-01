var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    //Using a globbing pattern - get files in tests or sub directories
    // ending with .test.jsx
    files: ['app/tests/**/*.test.jsx'],
    //preprocessors: Webpack for loading our components and
    //sourcemap - for processing error messages
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha:{
        timeout: '20000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
