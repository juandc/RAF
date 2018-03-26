const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("../webpack.config.global");

module.exports = {
  ...config,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    })
  ]
};
