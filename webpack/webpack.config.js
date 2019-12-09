const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js"
  },

  output: {
    filename: "./main.js"
  },
  watch: false,
  resolve: {
    extensions: [".js", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      title: "Holiday Lets, Homes, Experiences & Places - Airbnb",
      template: "./src/index.html",
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: "Holiday Lets, Homes, Experiences & Places - Airbnb",
      template: "./src/homes.html",
      filename: "homes.html"
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: "Holiday Lets, Homes, Experiences & Places - Airbnb",
      template: "./src/placedetail.html",
      filename: "placedetail.html"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new CopyPlugin([{ from: "./src/assets/img", to: "./assets/img" }])
  ],
  devServer: {
    compress: true,
    port: 9000,
    liveReload: true,
    open: true
  }
};
