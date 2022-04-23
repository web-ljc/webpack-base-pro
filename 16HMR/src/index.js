import './media/iconfont.css'
import './css/index.less'
import print2 from './print.js'

console.info('index.js文件被加载了2221')

print2()

function add(x, y) {
  console.info(x+y)
}
add(1,2)

if(module.hot) {
  // 一旦module.hot为true，说明开启了HMR功能
  module.hot.accept('./print.js', () => {
    // 方法会监听print.js文件的变化，一旦发生变化，其他模块不会重新打包
    // 会执行回调函数
    print2()
  })
}