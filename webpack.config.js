const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const TerserPlugin = require('terser-webpack-plugin');
const resolve = (path) => path.resolve(__dirname, path)
module.exports = {
  entry: {
    app: resolve('src/main.js')
  },
  output: {
    path: resolve('dist'),
    clean: true,
    publicPath: '/',
    filename: '[name].[hash].js'

  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'pages': resolve('src/pages'),
      'components': resolve('src/components')
    }

  },
  devServer: {
    hot: true,
    compress: true,
    open: true
  },
  optimization: {
    minimize: true,
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
      }, {
        test: /\.vue$/,
        use: 'vue-loader'
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, 'public/index.html'),
      inject: true
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })
  ]
}