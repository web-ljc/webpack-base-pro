const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

/* 
  tree shaking: 去除无用代码
    前提：1必须使用es6模块化 2开启production环境
    作用：减少代码体积
  
    在package.json中配置
      "sideEffects": false 所有代码都没有副作用（都可以进行 tree shaking）
      问题 可能会把 css / @babel/polyfill 副作用干掉
      "sideEffects": ["*.css", "*.less"]
*/

process.env.NODE_ENV = 'production'

// 公共cssloader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  {
    // 需要在package.json中定义browserslist
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: [
        require('postcss-preset-env')()
      ]
    }
  }
]

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/built.[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // 一个文件只能被一个loader处理，当一个文件被多个loader处理，一定要指定loader执行先后顺序 enforce
      {
        // package.json中 eslintConfig -- airbnb
        test: /\.js$/,
        exclude: /node_modules/,
        // 优先执行
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        // oneOf里的loader只会匹配一个
        // 注意：不能有两个配置处理同一个类型文件
        oneOf: [
          {
            test: /\.css$/,
            use: [ ...commonCssLoader ]
          },
          {
            test: /\.less$/,
            use: [ ...commonCssLoader, 'less-loader' ]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: {version:3},
                    targets: {
                      chrome: '60',
                      firefox: '60',
                      ie: '9',
                      safari: '10',
                      edge: '17'
                    }
                  }
                ]
              ],
              // 开启babel缓存，二次构建时会读取之前的缓存
              cacheDirectory: true
            }
          },
          {
            test: /\.(jpg|png|gif)$/,
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[hash:10].[ext]',
              outputPath: 'imgs'
            }
          },
          {
            test: /\.html$/,
            loader: 'html-loader'
          },
          {
            exclude: /\.(html|js|css|less|jpg|png|gif)$/,
            loader: 'file-loader',
            options: {
              outputPath: 'media'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/build.[contenthash:10].css'
    }),
    new OptimizeCssAssetsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  mode: 'production',
  devtool: 'source-map'
}