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
  },
  devtool: 'nosources-source-map'
}

/* 
  source-map:一种提供源代码到构建后代码映射技术，如果构建后代码出错了，通过映射可以追踪源代码错误
  [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map

  source-map 外部
    错误代码准确信息，源代码的错误位置

  inline-source-map: 内联  
    只生成一个内联source-map
    错误代码准确信息，源代码的错误位置

  hidden-source-map：外部
    错误代码错误原因，但是没有错误位置
    不能追踪到源代码错误，只能提示到构建后代码的错误位置

  eval-source-map：内联
    每一个文件都对应生成source-map，都在eval
    错误代码准确信息，源代码的错误位置

  nosources-source-map：外部
    错误代码准确信息，找不到源代码

  cheap-source-map：外部
    错误代码准确信息，源代码的错误位置
    只能精确到行

  cheap-module-source-map：外部
    错误代码准确信息，源代码的错误位置
  
  内联 和 外部区别：1外部生成了文件，内联没有    2内部构建速度更快

  开发环境：速度快，调试更友好
    速度快（eavl>inline）
      eval-cheap-source-map
    调试更友好
      source-map

    -- eval-source-map

  生产环境：源代码要不要隐藏？调试要不要友好
    hidden-source-map 只隐藏源代码，会提示构建后代码错误信息

    source-map 调试更友好
*/