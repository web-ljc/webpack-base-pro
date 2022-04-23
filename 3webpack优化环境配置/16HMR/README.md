```js
/* 
  
  HMR: hot module replacement 热模块替换 / 模块热替换
    作用：一个模块发生变化，只会重新打包这一个模块。
      极大提升构建速度

      样式文件：可以使用HMR功能，style-loader内部实现
      JS：默认不能使用HMR功能
        HMR功能对js的处理，只能处理非入口js文件
      HTML：默认不能使用HMR功能，同时：html文件不能热更新了。（不用做HMR功能）
        解决：修改entry接口

  if(module.hot) {
    // 一旦module.hot为true，说明开启了HMR功能
    module.hot.accept('./print.js', () => {
      // 方法会监听print.js文件的变化，一旦发生变化，其他模块不会重新打包
      // 会执行回调函数
      print2()
    })
  }
*/
```