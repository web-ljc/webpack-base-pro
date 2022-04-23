const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      /* 
        语法检查：eslint-loader eslint
          注意：只检查自己的源代码，第三方的库是不用检查的
          设置检查规则：
            package.json中eslintConfig中设置
              "eslintConfig": {
                "extends": "aribnb-base"
              }
            airbnb -- eslint-config-airbnb-base eslint eslint-plugin-import
      */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
}