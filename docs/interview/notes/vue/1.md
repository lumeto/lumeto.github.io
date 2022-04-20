## 如何理解MVVM原理

### 什么是MVVM？
MVVM是一种软件架构模式，是Model-View-ViewModel的缩写。
#### 模型（Model）
模型是指代表真实状态内容的领域模型（面向对象），或指代表内容的数据访问层（以数据为中心）。在Vue中是data,computed,methods等
#### ViewModel层
在Vue中是实例的VM对象
#### 视图（View）
就像在MVC和MVP模式中一样，视图是用户在屏幕上看到的结构、布局和外观（UI）。

### 与MVC的对比
1. 实现数据与视图的分离
2. 通过数据来驱动视图，开发者只需要关心数据变化，DOM操作被封装了

### Vue中的MVVM

![mvvm](/images/mvvm.png)

::: tip
Vue中实现MVVM模型的三个核心：
1. 响应式：通过数据劫持(vue2`Object.defineProperty`，vue3`Proxy`)，从而监听数据（Model）的变化 
2. 模板解析：解析Vue的模板中的事件绑定，从而监听View的变换
3. 渲染：将vue模板+数据渲染成html
::: 
