/**
 * index.js webpack入口起点文件
 * 
 * 1.运行指令：
 *  开发环境：webpack ./src/index.js -o ./build/build.js --mode=development
 *    以 ./src/index.js 为入口文件， 打包后输出到 ./build 整体打包环境是开发环境
 *  生产环境：webpack ./src/index.js -o ./build/build.js --mode=production 
 *    以 ./src/index.js 为入口文件， 打包后输出到 ./build 整体打包环境是生产环境
 * 
 * 2.结论：
 *  1.webpack能处理js/json资源，不能处理css/img等其他资源
 *  2.生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化
 *  3.生产环境比开发环境多一个压缩Js代码
 *    
 */

import data from './data.json'
console.info(data)

// import './index.css'

function add(x, y) {
  return x + y
}
console.info(add(1, 3))
