const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/[name].js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'development',
  // 解析模块的规则
  resolve: {
    // 配置解析模块路径别名：优点简写路径，缺点没有路径提示
    alias: {
      $css: resolve(__dirname, 'src/css'),
      $js: resolve(__dirname, 'src/js') 
    },
    // 配置省略文件路径的后缀名
    extensions: ['.js', '.json', '.jsx'],
    // 告诉webpack解析模块是去哪个目录
    modules: [resolve(__dirname, '../../node_modules'), 'node_modules']
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      // 默认值
      // minSize: 30 * 1024, // 分割chunk最小为30kb
      // maxSize: 0, // 最大没有限制
      // minChunks: 1, // 要提出的chunk最少被引用1次
      // maxAsyncRequests: 5, // 按需加载时并行加载文件的最大数量
      // maxInitialRequests: 3, // 入口js文件最大并行请求数量
      // automaticNameDelimiter: '~', // 名称连接符
      // name: true, // 可以使用命名规则
      // cacheGroups: {
      //   // 分割chunk的组
      //   // node_modules文件会被打包到vendors组的chunk中。
      //   vendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10
      //   },
      //   default: {
      //     // 要提取的chunk最少被引用2次
      //     minChunks: 2,
      //     // 优先级
      //     priority: -20,
      //     // 如果当前要打包的模块，和之前已经被提取的模块是同一个，就会复用，不重新打包
      //     reuseExistingChunk: true
      //   }
      // }
    },
    // 将当前模块的记录其他模块的hash单独打包为一个文件 runtime
    // 解决：修改a文件导致b文件的contenthash变化
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`
    },
    minimizer: [
      // 配置压缩方案
      new TerserWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  }
}