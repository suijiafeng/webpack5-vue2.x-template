const webpackBaseConf = require('./webpack.base.conf');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isAnalyzer = process.env?.analyzer
const webpackConfig = merge(webpackBaseConf, {
  mode: 'production',
  devtool: false,
  cache: true,
  target: ['web', 'es5'],
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      '...',
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_debugger: true,
            drop_console: true
          }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].css' })
  ]
})
isAnalyzer && webpackConfig.plugins.push(new BundleAnalyzerPlugin())
module.exports = webpackConfig