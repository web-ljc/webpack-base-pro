const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require("path");
const OptimizeCssAssetsPlugin  = require('optimize-css-assets-webpack-plugin')

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
         {
           loader: 'postcss-loader',
           options: {
             ident: 'postcss',
             plugins: [
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
    }),
    // 压缩css
    new OptimizeCssAssetsPlugin()
  ],
  mode: 'development'
}