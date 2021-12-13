const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  output: {
    clean: true,
  },

  devServer: {
    port: "8080",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
