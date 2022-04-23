const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

/* 
  
*/

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/[name].js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // 排除node_modules下的js文件
        exclude: /node_modules/,
        // 只检查src下的js文件
        include: resolve(__dirname, 'src'),
        // 优先执行
        enforce: 'pre', // post延后执行 pre优先执行
        // 单个loader使用loader
        loader: 'eslint-loader',
        options: {}
      },
      {
        // 以下配置只会一个生效
        oneOf:[]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'development'
}