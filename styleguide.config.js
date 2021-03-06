const config = require('./webpack.config.js');

module.exports = {
  title: 'My Great Style Guide',
  components: './src/components/**/*.js',
  template: './styleguide/templete.html',
  skipComponentsWithoutExample: true,
  getExampleFilename: componentpath => componentpath.replace(/\.js$/, '.examples.md'),
  updateWebpackConfig(webpackConfig) {
    webpackConfig.module.loaders = webpackConfig.module.loaders.concat(config().module.rules);
    return webpackConfig;
  },
  // webpackConfig: config, For v5
  showCode: true,
  highlightTheme: 'monokai',
};
