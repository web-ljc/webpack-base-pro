```js
/* 
  css兼容

/* 
  css兼容处理： postcss -- postcss-loader postcss-preset-env
  帮postcss找到package.json中browsers里面的配置，通过配置加载指定的css兼容样式
  "browserslist": {
    // 开发环境 -- 设置环境变量 process.env.NODE_ENV = 'development'
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ],
    // 生产环境，默认生产环境
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ]
  }

  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: [
      //  postcss的插件
      require('postcss-preset-env')()
      ]
    }
  }
*/
*/
```