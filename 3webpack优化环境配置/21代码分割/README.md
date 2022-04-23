```js
/* 

  entry: './src/js/index.js', // 单入口
  // entry: {
  //   // 多个入口，最终只输就有一个bundle
  //   main: './src/js/index.js',
  //   test: './src/js/test.js'
  // },

  可以将node_modules中代码单独打包一个chunk最终输出
  自动分析多入口chunk中，有没有公共的文件，如果有会打包成单独一个chunk。不会打包成多个
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

*/

// 通过js代码，让某个文件被单独打包成一个chunk
// import动态导入语法：将某个文件单独打包
// import(/* webpackChunkName: 'test' */'./test').then(({mul, sum}) => {
//   // eslint-disable-next-line
//   console.info(mul(6, 6))
// }).catch(() => {
//   // eslint-disable-next-line
//   console.warn('文件加载失败！')
// })
```