const path = require("path");
const nodeExternals = require("webpack-node-externals");
const getNewConfig = require("../webpack.config.global");

module.exports = getNewConfig({
  webpack: ({ config }) => ({
    ...config,
    entry: "./server.js",
    output: { filename: "server.js" },
    target: "node",
    externals: [nodeExternals()]
  })
});
