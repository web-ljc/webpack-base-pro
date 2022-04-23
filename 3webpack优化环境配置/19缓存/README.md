```js
/* 
  缓存：
    babel缓存
      cacheDirectory：true
       -- 让第二次构建速度更快
       
    文件资源缓存
      hash：每次webpack构建时会生成一个唯一的hash值
        问题：因为js和css同时使用一个hash值。如果重新打包，会导致所有缓存失效
      chunkhash:根据chunk生成的hash值，如果打包来源于同一个chunk，那么hash值就一样
        问题：js和css的hash值还是一样的
          因为css是在js中被引入的，所以同属于一个chunk
      contenthash：根据文件的内容生成hash值。不同文件hash值一定不一样
      -- 让代码上线运行缓存更好使用
*/
```