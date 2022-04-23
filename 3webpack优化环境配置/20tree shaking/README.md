```js
/* 
  tree shaking: 去除无用代码
    前提：1必须使用es6模块化 2开启production环境
    作用：减少代码体积
  
    在package.json中配置
      "sideEffects": false 所有代码都没有副作用（都可以进行 tree shaking）
      问题 可能会把 css / @babel/polyfill 副作用干掉
      "sideEffects": ["*.css", "*.less"]
*/
```