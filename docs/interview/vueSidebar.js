const { title } = require("../.vuepress/config.js");
module.exports = [
  {
    title: "Vue",
    collapsable: false,
    children: [
      {
        title: "1-如何理解MVVM原理",
        path: "/interview/notes/vue/1",
      },
      {
        title: "2-Vue双向绑定原理,响应式数据的原理是什么",
        path: "/interview/notes/vue/2",
      },
      {
        title: "3-vue中是如何检测数组变化",
        path: "/interview/notes/vue/3",
      },
      {
        title: "4-为何Vue采用异步渲染",
        path: "/interview/notes/vue/4",
      },
      {
        title: "5-nextTick实现原理",
        path: "/interview/notes/vue/5",
      },
      {
        title: "6-vue组件的生命周期",
        path: "/interview/notes/vue/6",
      },
      {
        title: "7-ajax请求放在哪个生命周期中",
        path: "/interview/notes/vue/7",
      },
      {
        title: "8-何时需要使用beforeDestroy",
        path: "/interview/notes/vue/8",
      },
      {
        title: "9-vue父子组件生命周期调用顺序",
        path: "/interview/notes/vue/9",
      },
      {
        title: "10-vue中Computed的特点",
        path: "/interview/notes/vue/10",
      },
    ],
  },
];
