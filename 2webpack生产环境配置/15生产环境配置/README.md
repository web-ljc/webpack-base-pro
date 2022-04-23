### 生产环境配置

- css打包配置
  - 编译 css-loader style-loader 
  - 分离文件 mini-css-extract-plugin
  - 兼容处理 postcss-loader
  - 压缩文件 optimize-css-assets-webpack-plugin

- js打包配置
  - 校验 eslint-loader
  - 兼容处理 babel-loader
  - 压缩 mode: production

- 图片处理
  - 编译 url-loader
  - 优化图片 limit
  
- html处理
  - 编译 HtmlWebpackPlugin
  - html中图片 html-loader
  - 压缩 minify

- 其他处理
  - 编译 file-loader
