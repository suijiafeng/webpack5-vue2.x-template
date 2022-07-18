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

webpack5-vue2.x-template  是一套基于 webpack5 + vue2.x + mockjs + element-ui 项目工程模板。

