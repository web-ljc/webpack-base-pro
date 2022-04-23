import $ from 'jquery'
// import './test'

function sum2(...args) {
  return args.reduce((p, c) => p + c, 0);
}

/* 
  通过js代码，让某个文件被单独打包成一个chunk
  import动态导入语法：将某个文件单独打包
*/
import(/* webpackChunkName: 'test' */'./test').then(({mul, sum}) => {
  // eslint-disable-next-line
  console.info(mul(6, 6))
}).catch(() => {
  // eslint-disable-next-line
  console.warn('文件加载失败！')
})

// eslint-disable-next-line
console.info(sum2(1, 2, 3, 4, 5))
// eslint-disable-next-line
console.info($)