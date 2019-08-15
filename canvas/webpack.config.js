const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {  
  return {
    entry: './src/js/index.js',
    mode: 'production',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'canvas-fsfo-script.js'
    },
    watch: true,
    module: {
      rules: [{
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'canvas-fsfo-theme.css'
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  };
};