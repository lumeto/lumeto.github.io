## Vue组件的生命周期

### 生命周期

#### 创建实例过程中的生命周期

1. beforeCreated
 
  此时，事件和生命周期 已经初始化完成

2. created
  
  injection和数据响应式已经初始化完成

3. beforeMount

  模板已经编译完成，

4. mounted

  将编译好的模板挂载
  

5. beforeDestroy

  vm.$destroy()被调用

6. destroyed

销毁注册事件、子组件和事件监听器

#### 数据更新的生命周期
1. beforeUpdate
 
  数据变化时会被触发

2. updated
  
  Virtual DOM更新或再次渲染完成

![生命周期](/images/lifecycle.png)

