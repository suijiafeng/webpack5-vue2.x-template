const webpackBaseConf = require('./webpack.base.conf');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
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
      }),
      new CssMinimizerPlugin({
        exclude: /\/includes/,
        minify: CssMinimizerPlugin.cssoMinify
      }),
    ]
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].css' }),
    new CopyPlugin({
      patterns: [{
        from: "public", globOptions: { dot: true, gitignore: true, ignore: ["**/index.html"] },
      }
      ],
    }
    )
  ]
})
isAnalyzer && webpackConfig.plugins.push(new BundleAnalyzerPlugin())
module.exports = webpackConfig