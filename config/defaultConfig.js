const { context, mode, devtool } = require('./utils');

module.exports = {
  context,
  devtool,
  mode,
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js)$/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
