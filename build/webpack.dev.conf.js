const webpackBaseConf = require('./webpack.base.conf')
const { merge } = require('webpack-merge');
const webpack = require("webpack");
const webpackConfig = merge(webpackBaseConf, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    compress: true,
    open: true,
    hot: true,
    client: {
      progress:true,
      overlay: {
        errors: true,
        warnings: false
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  }
})

module.exports = webpackConfig