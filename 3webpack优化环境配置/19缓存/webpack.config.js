const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

/* 
  缓存：
    babel缓存
      cacheDirectory：true
    文件资源缓存
      hash：每次webpack构建时会生成一个唯一的hash值
        问题：因为js和css同时使用一个hash值。如果重新打包，会导致所有缓存失效
      chunkhash:根据chunk生成的hash值，如果打包来源于同一个chunk，那么hash值就一样
        问题：js和css的hash值还是一样的
          因为css是在js中被引入的，所以同属于一个chunk
      contenthash：根据文件的内容生成hash值。不同文件hash值一定不一样
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