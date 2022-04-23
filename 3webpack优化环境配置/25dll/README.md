```js
/* 
  使用dll进行打包，将某些库打包在一起，再webpack打包时忽略已打包内容，直接引用
  // 告诉webpack哪些库不参与打包
  new webpack.DllReferencePlugin({
    manifest: resolve(__dirname, 'dll/mainfest.json')
  }),
  // 将某个文件打包输出去，并在html自动引入该资源
  new AddAssetHtmlWebpackPlugin({
    filepath: resolve(__dirname, 'dll/jquery.js')
  })

  使用dll技术对某些库（react、vue）进行单独打包
    需要运行webpack.dll.js文件
    --> webpack --config webpack.dll.js
  
*/
```