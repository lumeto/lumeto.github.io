## 响应式数据的原理是什么

### 基本概念
Vue 的响应式，核心机制是 **观察者模式**。

4个关键操作步骤：

- 数据劫持
- 依赖收集
- 依赖更新
- 视图更新

数据是被观察的一方，发生改变时，通知所有的观察者，这样观察者可以做出响应，比如，重新渲染然后更新视图。

我们把依赖数据的观察者称为 watcher，那么这种关系可以表示为：
```js
data -> watcher
```
数据可以有多个观察者，怎么记录这种依赖关系呢？

Vue 通过在 data 和 watcher 间创建一个 dep 对象，来记录这种依赖关系：
```js
data - dep -> watcher
```
dep 的结构很简单，除了唯一标识属性 id，另一个属性就是用于记录所有观察者的 subs：

- `id - number`
- `subs - [Watcher]`

再来看 watcher

Vue 中 watcher 的观察对象，确切来说是一个求值表达式，或者函数。这个表达式或者函数，在一个 Vue 实例的上下文中求值或执行。这个过程中，使用到数据，也就是 watcher 所依赖的数据。用于记录依赖关系的属性是 deps，对应的是由 dep 对象组成的数组，对应所有依赖的数据。而表达式或函数，最终会作为求值函数记录到 getter 属性，每次求值得到的结果记录在 value 属性：

- `vm - VueComponent`
- deps - [Dep]
- getter - function
- value - *

另外，还有一个重要的属性 cb，记录回调函数，当 getter 返回的值与当前 value 不同时被调用：

- `cb - function`

我们通过示例来整理下 data、dep、watcher 的关系：
```js
var vm = new Vue({
  data: {
    name: 'luobo',
    age: 18
  }
})

var userInfo = function () {
  return this.name + ' - ' + this.age
}

var onUserInfoChange = function (userInfo) {
  console.log(userInfo)
}

vm.$watch(userInfo, onUserInfoChange)
```

上面代码首先创建了一个新的 Vue 实例对象 vm，包含两个数据字段：name、age。对于这两个字段，Vue 会分别创建对应的 dep 对象，用于记录依赖该数据的 watcher。

然后定义了一个求值函数 userInfo，注意，这个函数会在对应的 Vue 示例上下文中执行，也就是说，执行时的 this 对应的就是 vm。

回调函数 onUserInfoChange 只是打印出新的 watcher 得到的新的值，由 userInfo 执行后生成。

通过 vm.$watch(userInfo, onUserInfoChange)，将 vm、getter、cb 集成在一起创建了新的 watcher。创建成功后，watcher 在内部已经记录了依赖关系，watcher.deps 中记录了 vm 的 name、age 对应的 dep 对象（因为 userInfo 中使用了这两个数据）。

接下来，我们修改数据：
```js
vm.name = 'tang'
```
执行后，控制台会输出：
```js
tang - 18
```
同样，如果修改 age 的值，也会最终触发 onUserInfoChange 打印出新的结果。

用个简单的图来整理下上面的关系：
```js
vm.name -- dep1
vm.age  -- dep2
watcher.deps --> [dep1, dep2]
```
修改 vm.name 后，dep1 通知相关的 watcher，然后 watcher 执行 getter，得到新的 value，再将新的 value 传给 cb：
```js
vm.name -> dep1 -> watcher -> getter -> value -> cb
```
可能你也注意到了，上面例子中的 userInfo，貌似就是计算属性的作用嘛：
```js
var vm = new Vue({
  data: {
    name: 'luobo',
    age: 18
  },
  computed: {
    userInfo() {
      return this.name + ' - ' + this.age
    }
  }
})
```
::: tip
其实，计算属性在内部也是基于 watcher 实现的，每个计算属性对应一个 watcher，其 getter 也就是计算属性的声明函数。

不过，计算属性对应的 watcher 与直接通过 vm.$watch() 创建的 watcher 略有不同，毕竟如果没有地方使用到这个计算属性，数据改变时都重新进行计算会有点浪费，这个在本文后面会讲到。
:::

### 建立依赖关系

### 数据变更同步

### 计算属性
