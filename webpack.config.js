const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const TerserPlugin = require('terser-webpack-plugin');
const resolve = (dir) => path.resolve(__dirname, dir)
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
  cache: true,
  devServer: {
    compress: true,
    open: true,
    client: {
      progress: true,
    },
  },
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
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        loader: "url-loader",
        options: {
          limit: 8 * 1024,
          outputPath: 'imgs/',
          name: '[name][hash:8].[ext]',//图片文件的命名
          esModule: false
        }
      }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('public/index.html'),
      inject: true
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })
  ]
}