const { resolve } = require("path");

const { NODE_ENV: mode = "development", PORT: port = 3000 } = process.env;

const context = resolve(__dirname, "../src/");
const devtool = "cheap-module-source-map";
const vendor = ["react", "react-dom", "react-router"];

module.exports = {
  context,
  devtool,
  vendor,
  mode,
  port
};
