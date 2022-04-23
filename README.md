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
  
### wepack性能优化
  - 开发环境性能优化
    - 优化打包构建速度
    - 优化代码调试

  - 生产环境性能优化
    - 优化打包构建速度
    - 优化代码运行的性能
    