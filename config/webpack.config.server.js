const nodeExternals = require("webpack-node-externals");
const webpackConfig = require("./");

module.exports = webpackConfig({
  name: "server",
  config: {
    target: "node",
    externals: [nodeExternals()]
  }
});
