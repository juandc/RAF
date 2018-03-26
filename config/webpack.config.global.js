const { context, mode, dev } = require("./utils");

const config = {
  context,
  mode,
  devtool: "cheap-module-source-map",
  externals: ["react", "react-dom"],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js)$/,
        use: ["babel-loader"]
      }
    ]
  }
};

module.exports = ({ webpack }) => webpack({ config, dev });
