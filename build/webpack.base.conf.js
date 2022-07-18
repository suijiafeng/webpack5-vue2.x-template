const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');
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
        test: /\.(png|gif|svg|jpe?g|webp)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            // 小于50kb图片转成base64
            maxSize: 50 * 1024 
          }
        },
        generator: {
          filename: 'assets/images/[hash:8][ext][query]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/font/[hash:8][ext][query]'
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
    new VueLoaderPlugin(),
    new ESLintPlugin({fix:true})
  ]
}