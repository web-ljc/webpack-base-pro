const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

/*
 
*/

process.env.NODE_ENV = 'production'

module.exports = {
  entry: './src/js/index.js', // 单入口
  // entry: {
  //   // 多个入口，最终只输就有一个bundle
  //   main: './src/js/index.js',
  //   test: './src/js/test.js'
  // },
  output: {
    // [name] 取文件名
    filename: 'js/[name].built.[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  /* 
    可以将node_modules中代码单独打包一个chunk最终输出
    自动分析多入口chunk中，有没有公共的文件，如果有会打包成单独一个chunk。不会打包成多个
  */
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'production',
}