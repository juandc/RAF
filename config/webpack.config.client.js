const webpackConfig = require("./");

module.exports = webpackConfig({
  name: "client",
  config: {
    // externals,
    isStatic: true,
    target: "web",
    withVendor: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "all"
          }
        }
      }
    }
  }
});
