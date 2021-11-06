# 关于 webpack5-vue2.x-template 

## 启动项目

```
npm install      // 下载依赖包

npm run dev  // 运行本地开发环境

npm run build  // 打包


```

## 目录结构

```
.
├── config # 环境变量配置
├── public # 不被打包的静态资源
├── mock # 数据模拟
├── src # 项目代码
│   ├── assets # 会被打包的静态资源
│   ├── components # 公用组件
│   ├── router # 路由配置
│   ├── store # 状态管理
│   ├── styles # 全局样式
│   ├── utils # 全局工具类
│   ├── page # 路由页面
│   ├── App.vue # 入口vue文件
│   ├── main.js # 主入口文件
├── .babelrc # babel配置
├── .gitignore # git忽略配置项
├── .eslintrc # eslint 配置文件
├── postcss.config.js # postcss 配置文件
├── webpack.config.js webpack相关配置
├── package.json
├── README.md


```

## 介绍

webpack5-vue2.x-template  是一套基于 webpack5 + vue2.x + mockjs 项目工程模板。webpack 随着近年来的不断升级完善，从 v4.0.0 开始，**webpack 可以不用再引入一个配置文件**来打包项目，然而，它仍然有着 [高度可配置性](https://webpack.docschina.org/configuration)，结合webpack-cli 的内置功能，可以满足开发者的日常开发需求。本项目将从零开始，尽量以最新的配置方式，根据以往的项目经验搭建一个通用的项目工程模板。对于 webpack5 已经默认的配置项，本项目的配置文件里将不会重复体现，我会尽可能做到精简配置。

因时间、精力、技术水平等原因，本项目不可能做到尽善尽美，我也在不断学习中，仅供学习交流使用。用于企业级重要项目开发，请慎重考虑。
