const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");

module.exports = {
  entry: {
    app: "./assets/js/script.js",
    events: "./assets/js/events.js",
    schedule: "./assets/js/schedule.js",
    tickets: "./assets/js/tickets.js",
    dom: "./assets/js/domMethods.js",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /node_modules/,
          name: "vendor",
          chunks: "initial"
        },
      }
    },
    runtimeChunk: {
      name: "manifest"
    },
  },
  output: {
    filename: "[name].[chunkhash].bundle.js",
    chunkFilename: "[name].[chunkhash].bundle.js",
    publicPath: "/",
    path: path.join(__dirname + "/dist")
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ["file-loader?name=[name].[ext]&outputPath=dist/images/", 
        {
          loader: "image-webpack-loader",
        },
      ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static"
    })
],
  mode: "development"
};