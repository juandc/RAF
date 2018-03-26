const { resolve } = require("path");

const { NODE_ENV: mode = "production", PORT: port = 3000 } = process.env;

module.exports = {
  htmlTemplate: resolve(__dirname, "../public"),
  context: resolve(__dirname, "../src/"),
  dev: mode !== "production",
  mode,
  port
};
