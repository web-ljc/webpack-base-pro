```js
/* 
  
开发环境配置：能让代码运行
  运行项目指令
    wepack 会将打包结果输出
    npx webpack-dev-server 只会在内存中编译打包，没有输出

const HtmlWebpackPlugin = require('html-webpack-plugin')
const {resolve} = require('path')

module.exports = {
  entry: './src/index.js',
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
    open: true
  }
}

*/
```