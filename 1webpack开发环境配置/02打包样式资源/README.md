```js
/* 
  webpack.config.js wenpack的配置文件
    作用：指示webpack工作内容， 运行webpack指令时，会加载里边的配置
    
    所有构建工具都是基于node.js平台运行的
    项目使用ES6，配置基于node平台要使用commonJs

  // loader配置
  module: {
    rules: [
      // 详细loader配置
      // 不同文件必须配置不同loader处理
      {
        // 匹配文件
        test: /\.css$/,
        // 使用哪些loader进行处理
        use: [
          // use数组中执行顺序：从右向左，从下到上，依次执行
          // 创建style标签，将js中的样式资源插入进行，添加到head中生效
          'style-loader',
          // 将css文件变成commonjs模块加载js中，里面内容时样式字符串
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 将less文件编译成css文件
          'less-loader'
        ]
      }
    ]
  }
*/
```