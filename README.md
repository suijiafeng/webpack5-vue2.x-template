# 关于 webpack5-vue2.x-template 

## 启动项目

```
npm install      // 下载依赖包

npm run dev  // 运行本地开发环境

npm run build  // 打包

npm run test  // 本地运行打包后的dist文件夹代码


```

## 目录结构

```
.
├── build # 环境变量配置
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.prod.conf.js
├── config # 环境变量配置
│   ├── utils.js
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
├── package.json
├── README.md


```

## 介绍

webpack5-vue2.x-template  是一套基于 webpack5 + vue2.x + mockjs 项目工程模板。webpack 随着近年来的不断升级完善，从 v4.0.0 开始，**webpack 可以不用再引入一个配置文件**来打包项目，然而，它仍然有着 [高度可配置性](https://webpack.docschina.org/configuration)，结合webpack-cli 的内置功能，可以满足开发者的日常开发需求。本项目将从零开始，尽量以最新的配置方式，对于 webpack5 已经默认的配置项，这里将不会重复配置，这个项目用于wepack搭建学习，我会记录我在搭建这过程遇到的问题，共同学习。



###  遇到问题：

* 2022.04.03:  项目启动后，修改代码后，仅能更新一次，随后自动热更新失效。[webpack5文档](https://webpack.docschina.org/guides/hot-module-replacement) 上面说从 `webpack-dev-server` v4.0.0 开始，热模块替换是默认开启的，但是不知道为啥，在我的这个项目里，就出问题了,我先研究研究。

* 2022.06.03: 关于上次 webpack-dev-server 这个插件在修改代码后，仅能更新一次，随后自动热更新失效的这个问题，经后续排查发现，原因十分狗血。在项目中我有个组件"home.vue"被编辑器自动改写成"Home.vue",因为 webpack-dev-server 无法监听到这个文件的变化，所以没有更新后续的更新。

