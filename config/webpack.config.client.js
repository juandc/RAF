const LiveReloadPlugin = require('webpack-livereload-plugin');
const { mode } = require('./utils');
const webpackConfig = require('./');

module.exports = webpackConfig({
  name: 'client',
  config: {
    // externals,
    isStatic: true,
    target: 'web',
    withVendor: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
        },
      },
    },
    plugins: [mode === 'development' && new LiveReloadPlugin({ delay: 470 })],
  },
});
