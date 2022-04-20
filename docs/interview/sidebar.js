const { title } = require("../.vuepress/config.js");
module.exports = [
  {
    title: "Css",
    collapsable: false,
    children: [
      {
        title: "1-怎么让一个div水平垂直居中",
        path: "/interview/notes/css/1",
      },
    ],
  },
  {
    title: "JavaScript",
    collapsable: false,
    children: [
      {
        title: "解析 url 参数",
        path: "/interview/notes/js/1",
      },
      {
        title: "数组 map 用法",
        path: "/interview/notes/js/2",
      },
      {
        title: "如何变量提升",
        path: "/interview/notes/js/3",
      },
      {
        title: "如何获取最大值",
        path: "/interview/notes/js/4",
      },
      {
        title: "是否用过 Object.create()",
        path: "/interview/notes/js/5",
      },
      {
        title: "数组 reduce 的用法",
        path: "/interview/notes/js/6",
      },
      {
        title: "数组去重有几种方式",
        path: "/interview/notes/js/7",
      },
      {
        title: "jsonp 本质是 ajax 吗",
        path: "/interview/notes/js/8",
      },
      {
        title: "Map 和 Object 区别",
        path: "/interview/notes/js/9",
      },
      {
        title: "Map 和 Set-有序和无序",
        path: "/interview/notes/js/10",
      },
      {
        title: "Set 和 Array 区别",
        path: "/interview/notes/js/11",
      },
    ],
  },
  {
    title: "Vue",
    collapsable: false,
    children: [
      {
        title: "如何理解MVVM原理",
        path: "/interview/notes/vue/1",
      },
      {
        title: "vue双向绑定原理,响应式数据的原理是什么",
        path: "/interview/notes/vue/2",
      },
      {
        title: "为何vue采用异步渲染",
        path: "/interview/notes/vue/4",
      },
      {
        title: "nextTick实现原理",
        path: "/interview/notes/vue/5",
      },
      {
        title: "vue组件的生命周期",
        path: "/interview/notes/vue/6",
      },
      {
        title: "ajax请求放在哪个生命周期中",
        path: "/interview/notes/vue/7",
      },
      {
        title: "何时需要使用beforeDestroy",
        path: "/interview/notes/vue/8",
      },
      {
        title: "vue父子组件生命周期调用顺序",
        path: "/interview/notes/vue/9",
      },
      {
        title: "vue中Computed的特点",
        path: "/interview/notes/vue/10",
      },
      {
        title: "watch中的deep:true是如何实现的",
        path: "/interview/notes/vue/11",
      },
      {
        title: "vue中事件绑定的原理",
        path: "/interview/notes/vue/12",
      },
      {
        title: "vue中的v-html会导致哪些问题",
        path: "/interview/notes/vue/13",
      },
      {
        title: "vue中的v-if和v-show的区别",
        path: "/interview/notes/vue/14",
      },

      {
        title: "为什么v-for和v-if不能连用",
        path: "/interview/notes/vue/15",
      },
      {
        title: "v-model中的实现原理及如何自定义v-model",
        path: "/interview/notes/vue/16",
      },
      {
        title: "组件中的data为什么是一个函数",
        path: "/interview/notes/vue/17",
      },
      {
        title: "vue组件如何通信",
        path: "/interview/notes/vue/18",
      },
      {
        title: "什么是作用域插槽",
        path: "/interview/notes/vue/19",
      },
      {
        title: "用vnode来描述一个DOM结构",
        path: "/interview/notes/vue/20",
      },
    ],
  },
  {
    title: "React",
    collapsable: false,
    children: [
      {
        title: "占位符",
        path: "/interview/notes/react/1",
      },
    ],
  },
];
