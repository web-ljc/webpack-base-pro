# webpack 学习项目
  - webpack是一种前端资源构建工具，一个静态模块打包器（module bundler）
  - 在webpack看来，前端的所有资源文件(js/json/less)都会作为模块处理。根据的模块依赖关系进行静态分析，打包生成对应的静态资源bundle
```js
// webpack 基于4版本开发
```
### 五个核心概念
  - Entry
    - 入口（Entry）指示webpack以哪个文件为入口起点开始打包，分析构建内部依赖图
  - Output
    - 输出（Output）指示webpack打包后的资源bundles输出到哪里去，以及如何命名
  - Loader
    - loader让webpack能够去处理哪些非JavaScript文件。（webpack自身只能理解JavaScript）
  - Plugins
    - 插件（Plugins）可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩一直到重新定义环境中的变量等
  - Mode
    - 模式（Mode）指示webpack使用相应模式的配置

### 生产环境配置

- css打包配置
  - 编译 css-loader style-loader 
  - 分离文件 mini-css-extract-plugin
  - 兼容处理 postcss-loader
  - 压缩文件 optimize-css-assets-webpack-plugin

- js打包配置
  - 校验 eslint-loader
  - 兼容处理 babel-loader
  - 压缩 mode: production

- 图片处理
  - 编译 url-loader
  - 优化图片 limit
  
- html处理
  - 编译 HtmlWebpackPlugin
  - html中图片 html-loader
  - 压缩 minify

- 其他处理
  - 编译 file-loader

### wepack性能优化
  #### 开发环境性能优化
    - 优化打包构建速度
      + HMR js需自己写/css 使用style-loader
    - 优化代码调试
      source-map

  #### 生产环境性能优化
    - 优化打包构建速度
      + oneOf
      + babel缓存
      + 多进程打包
      + externals / 配合CDN引用
      + dll / 部署
    - 优化代码运行的性能
      + 缓存（hash-chunkhash-contenthash）
        - hash webpack打包生成唯一hash值
        - chunkhash  打包同一个入口，就是同一chunkhash
        - contenthash 根据内容生成hash
      + tree shaking
      + 代码分割
        - 单入口 bundle
        - 多入口
      + 懒加载/预加载
      + pwa
