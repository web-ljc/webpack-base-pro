```js

// 懒加载:当文件需要时才加载。import动态引入
// 预加载 prefetch：会在使用之前，提前加载js文件。等其他资源加载完毕，浏览器空闲了，再偷偷加载。慎用兼容问题
// 正常加载可以认为是并行加载（同一时间加载多个文件）

// import(/*webpackChunkName: 'test', webpackPrefetch: true*/'./test').then(({mul}) => {
//   // eslint-disable-next-line
//   console.info(mul(4, 4))
// })
```