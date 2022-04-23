const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

/* 
  
*/

module.exports = {
  entry: './src/index.js',
  output: {
    // 文件名称（指定名称+目录）
    filename: 'js/[name].js',
    // 输出文件目录
    path: resolve(__dirname, 'build'),
    // 所有资源引入公共路径前缀,对应服务器的跟目录。一般用于生产环境 'imgs/a.jpg' --> '/imgs/a.jpg'
    publicPath: '/',
    chunkFilename: 'js/[name]_chunk.js', // 非入口chunk的名称， import动态加载的文件
    // library: '[name]', // 整个库向外暴露的变量名
    // libraryTarget: 'window' // 变量名添加到哪个上 browser
    // libraryTarget: 'global' // 变量名添加到哪个上 node
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'development'
}