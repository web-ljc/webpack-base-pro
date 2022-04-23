```js
/* 
  js兼容处理： babel-loader @babel/core @babel/preset-env
    1基本js兼容性处理 -- @babel/preset-env
      问题：只能转换基本语法，promise高级语法不能转换
    2全部js兼容性处理 -- @babel/polyfill
      问题：只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大
    3兼容性处理 -- core-js

  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      presets: [
        [
          '@babel/preset-env',
          {
            // 按需加载
            useBuiltIns: 'usage',
            // 指定core-js版本
            corejs: {
              version: 3
            },
            // 指定兼容到哪个版本浏览器
            targets: {
              chrome: '60',
              firefox: '60',
              ie: '9',
              safari: '10',
              edge: '17'
            }
          }
        ]
      ]
    }
  },
*/
```