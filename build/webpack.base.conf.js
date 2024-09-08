const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const resolve = (dir) => path.resolve(__dirname, '..', dir);

const loadEnv=(mode)=> {
  const basePath = path.resolve(process.cwd(), `.env`);
  const envPath = path.resolve(process.cwd(), `.env.${mode}`);
  
  const envFiles = [
    basePath,
    envPath,
    `${basePath}.local`,
    `${envPath}.local`,
  ];

  const envVars = {};

  envFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      const fileEnv = dotenv.parse(fs.readFileSync(filePath));
      for (const key in fileEnv) {
        envVars[key] = process.env[key] || fileEnv[key];
      }
    }
  });

  return envVars;
}

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  const mode = argv.mode || 'development';
  const envVars = loadEnv(mode);
  const BASE_URL = envVars.BASE_URL || '/';

  return {
    entry: {
      app: './src/main.js'
    },
    output: {
      path: resolve('dist'),
      filename: isProd ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
      chunkFilename: isProd ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
      publicPath: BASE_URL,
      clean: true
    },
    resolve: {
      extensions: ['.js', '.vue', '.css', '.scss', '.json'],
      alias: {
        '@': resolve('src'),
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 10 * 1024 // 10KB
            }
          },
          generator: {
            filename: 'images/[name].[hash:7][ext]'
          }
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          type: 'asset/resource',
          generator: {
            filename: 'media/[name].[hash:7][ext]'
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name].[hash:7][ext]'
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        filename: 'index.html',
        inject: true,
        minify: isProd ? {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        } : false
      }),
      new VueLoaderPlugin(),
      new ESLintPlugin({
        context: resolve('src'),
        files: ['**/*.{js,vue}'],
        exclude: ['/node_modules/'],
        emitError: true,
        emitWarning: true,
        failOnError: false,
        failOnWarning: false,
        fix: true
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify({
          ...envVars,
          BASE_URL: BASE_URL,
          NODE_ENV: argv.mode
        })
      }),
      new MiniCssExtractPlugin({
        filename: isProd ? 'css/[name].[contenthash:8].css' : 'css/[name].css',
        chunkFilename: isProd ? 'css/[id].[contenthash:8].css' : 'css/[id].css',
      }),
    ]
  };
};

// 主要改进：
// 1. 添加了 MiniCssExtractPlugin 的导入和配置
// 2. 移除了 webpack.ProvidePlugin，因为 process 已经在 DefinePlugin 中定义
// 3. 确保 envVars 在 dotenv.config() 失败时有一个默认值
// 4. 在 CSS 规则中正确使用 MiniCssExtractPlugin.loader