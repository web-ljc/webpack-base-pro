const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

/*
 
*/

process.env.NODE_ENV = 'production'

module.exports = {
  entry: './src/js/index.js', // 单入口
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
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'production',
}