/* 
  HMR: hot module replacement 热模块替换 / 模块热替换
    作用：一个模块发生变化，只会重新打包这一个模块。
      极大提升构建速度

      样式文件：可以使用HMR功能，style-loader内部实现
      JS：默认不能使用HMR功能
        HMR功能对js的处理，只能处理非入口js文件
      HTML：默认不能使用HMR功能，同时：html文件不能热更新了。（不用做HMR功能）
        解决：修改entry接口
      
*/
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {resolve} = require('path')

module.exports = {
  entry: ['./src/index.js', './src/index.html'],
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        // 处理css
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // 处理less
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8*1024,
          name: '[hash:10].[ext]',
          outputPath: 'imgs' // 输出路径
        }
      },
      {
        // 处理html中的img资源
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        // 处理其他资源
        exclude: /\.(html|js|css|less|jpg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'medias'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3001,
    open: true,
    // 开启HRM功能
    hot: true
  }
}