```js
/*
  开启多进程打包
  进程启动大概600ms，进程通信也有开销
  只有工作消耗时间长才需要

  {
    loader: 'thread-loader',
    options: {
      workers: 2 // 进程2个
    }
  },
*/
```