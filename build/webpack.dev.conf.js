const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = (env, argv) => {
  const baseConfig = baseWebpackConfig(env, argv);
  return merge(baseConfig, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      open: true,
      port: 8080,
      client: {
        overlay: {
          errors: true,
          warnings: false  // 设置为 false 以禁止显示警告
        },
      },
    },
    optimization: {
      runtimeChunk: 'single'
    }
  });
};