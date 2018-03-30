const { resolve } = require("path");
const defaultConfig = require("./defaultConfig");
const { vendor } = require("./utils");

function webpackConfig({
  name,
  config: { outputPath, withVendor, isStatic, ...config }
}) {
  return {
    ...defaultConfig,
    ...config,
    entry: {
      [name]: `./${name}.js`,
      ...(() => withVendor && { vendor })()
    },
    output: {
      path: resolve(__dirname, `../dist${isStatic ? "/static" : ""}`),
      filename: `[name].js`
    }
  };
}

module.exports = webpackConfig;
