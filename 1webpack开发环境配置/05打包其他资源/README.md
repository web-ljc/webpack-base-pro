```js
/* 
  // 打包其他资源，除了（html/js/css资源以外的文件）
  {
    exclude: /\.(html|js|css|less)$/,
    loader: 'file-loader',
    options: {
      name: '[hash:10].[ext]'
    }
  }
*/
```