const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

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
    filename: 'js/built.js',
    path: resolve.join(__dirname, 'build')
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
              ]
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
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/build.css'
    }),
    new OptimizeCssAssetsPlugin()
  ],
  mode: 'production'
}