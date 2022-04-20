## nextTick实现原理

### 什么是nextTick

`nextTick`有两种，一种是全局API——`Vue.nextTick`，另一种是实例方法/生命周期——`vm.$nextTick`。

二者的作用是一样的，即将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。

不同的是实例方法`vm.$nextTick`会自动将回调内部的this绑定到当前vue实例。

### nextTick原理

Vue在更新DOM是异步执行的。

只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。

如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。

然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。

### nextTick的实现

1. 简单来说，首先，Vue 用一个 callbacks 数组存放待执行的 callback 函数，每当使用Vue.nextTick或者vm.$nextTick时，就会将callback push 到 callbacks数组中。
2. 接下来， Vue 声明了一个 flushCallbacks 函数，这个函数会取出（清空） callbacks 数组中所有的 callback 函数并执行。
3. 然后 Vue 会尝试把 flushCallbacks 变成一个 microtask 或者 task 来执行。具体是 microtask 还是 task 得看 Vue 当前运行在什么环境。