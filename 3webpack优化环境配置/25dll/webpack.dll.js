/* 
  使用dll技术对某些库（react、vue）进行单独打包
    需要运行webpack.dll.js文件
    --> webpack --config webpack.dll.js
*/

const { resolve } = require("path");
const webpack = require('webpack')

module.exports = {
  entry: {
    // 最终打包生成的[name]
    jquery: ['jquery']
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dll'),
    library: '[name]_[hash]' // 打包的库里面向外暴露出去的内容叫什么名字
  },
  plugins: [
    // 打包生成一个 manifest.json -- 提供和jquery映射
    new webpack.DllPlugin({
      name: '[name]_[hash]', // 映射库的暴露的内容名称
      path: resolve(__dirname, 'dll/mainfest.json')
    })
  ],
  mode: 'production'
}
