const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { resolve } = require("path");

// 设置node环境变量
// process.env.NODE_ENV = 'production'

module.exports = {
  entry: './src/index.js',
  output: {
    filename: ('js/built.js'),
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          /* 
            css兼容处理： postcss -- postcss-loader postcss-preset-env
            帮postcss找到package.json中browsers里面的配置，通过配置加载指定的css兼容样式
            "browserslist": {
              // 开发环境 -- 设置环境变量 process.env.NODE_ENV = 'development'
              "development": [
                "last 1 chrome version",
                "last 1 firefox version",
                "last 1 safari version"
              ],
              // 生产环境，默认生产环境
              "production": [
                ">0.2%",
                "not dead",
                "not op_mini all"
              ]
            }
          */
          // 'postcss-loader'
          // 修改loader的配置
         {
           loader: 'postcss-loader',
           options: {
             ident: 'postcss',
             plugins: [
              //  postcss的插件
              require('postcss-preset-env')()
             ]
           }
         }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/build.css'
    })
  ],
  mode: 'development'
}