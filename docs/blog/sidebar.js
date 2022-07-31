const { title } = require("../.vuepress/config.js");
module.exports = [
  {
    title: "进阶·博文",
    collapsable: false,
    children: [
      {
        title: "作用域与闭包",
        path: "/blog/notes/vb/1",
      },
      {
        title: "this全面解析",
        path: "/blog/notes/vb/2",
      },
    ],
  },
  {
    title: "编程题",
    collapsable: false,
    children: [
      {
        title: "手写深拷贝",
        path: "/blog/notes/program/1",
      },
      {
        title: "手写Ajax",
        path: "/blog/notes/program/2",
      },
      {
        title: "手写函数防抖 debounce",
        path: "/blog/notes/program/3",
      },
      {
        title: "手写函数节流 throttle",
        path: "/blog/notes/program/4",
      },
      {
        title: "实现 call()",
        path: "/blog/notes/program/5",
      },
      {
        title: "6-实现 apply()",
        path: "/blog/notes/program/6",
      },
      {
        title: "实现 bind()",
        path: "/blog/notes/program/7",
      },
      {
        title: "instanceof的实现原理",
        path: "/blog/notes/program/8",
      },
      {
        title: "实现 new",
        path: "/blog/notes/program/9",
      },
      // {
      //   title: "10-实现 jsonp",
      //   path: "/blog/notes/program/10",
      // },
      {
        title: "手写 Promise",
        path: "/blog/notes/program/11",
      },
      {
        title: "手写 EventEmitter 订阅监听模式",
        path: "/blog/notes/program/12",
      },
      {
        title: "setTimout 实现 setInterval",
        path: "/blog/notes/program/13",
      },
      {
        title: "数组扁平化",
        path: "/blog/notes/program/14",
      },
      {
        title: "函数柯里化",
        path: "/blog/notes/program/15",
      },
      {
        title: "快速排序",
        path: "/blog/notes/program/16",
      },
      {
        title: "归并排序",
        path: "/blog/notes/program/17",
      },
    ],
  },
];
