const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const utils = require('../config/utils')
const resolve = (dir) => path.resolve(__dirname, '../', dir)
module.exports = {
  entry: {
    app: resolve('src/main.js')
  },
  output: {
    path: resolve('dist'),
    clean: true,
    publicPath: utils.publicPath,
    filename: 'js/[name].[hash:4].js',
    assetModuleFilename: 'assets/[name][hash:6][ext][query]'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      'pages': resolve('src/pages'),
      'components': resolve('src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|gif|svg|jpe?g)$/,
        exclude: /node_modules/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024 // 4kb
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: utils.title,
      template: resolve('public/index.html'),
      inject: true
    }),
    new VueLoaderPlugin()
  ]
}