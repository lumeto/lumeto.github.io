const { title } = require("../.vuepress/config.js");
module.exports = [
  {
    title: "进阶·博文",
    collapsable: false,
    children: [
      {
        title: "作用域与闭包",
        path: "/blog/notes/vb/作用域与闭包",
      },
      {
        title: "this全面解析",
        path: "/blog/notes/vb/this全面解析",
      },
    ],
  },
  {
    title: "编程题",
    collapsable: false,
    children: [
      {
        title: "1-手写深拷贝",
        path: "/blog/notes/program/1",
      },
      {
        title: "2-手写Ajax",
        path: "/blog/notes/program/2",
      },
      {
        title: "3-手写函数防抖 debounce",
        path: "/blog/notes/program/3",
      },
      {
        title: "4-手写函数节流 throttle",
        path: "/blog/notes/program/4",
      },
      {
        title: "5-实现 call()",
        path: "/blog/notes/program/5",
      },
      {
        title: "6-实现 apply()",
        path: "/blog/notes/program/6",
      },
      {
        title: "7-实现 bind()",
        path: "/blog/notes/program/7",
      },
      {
        title: "8-实现 instanceof",
        path: "/blog/notes/program/8",
      },
      {
        title: "9-实现 new",
        path: "/blog/notes/program/9",
      },
      {
        title: "10-实现 jsonp",
        path: "/blog/notes/program/10",
      },
      {
        title: "11-手写 Promise",
        path: "/blog/notes/program/11",
      },
      {
        title: "12-手写 EventEmitter 订阅监听模式",
        path: "/blog/notes/program/12",
      },
      {
        title: "13-setTimout 实现 setInterval",
        path: "/blog/notes/program/13",
      },
      {
        title: "14-数组扁平化",
        path: "/blog/notes/program/14",
      },
      {
        title: "15-函数柯里化",
        path: "/blog/notes/program/15",
      },
      {
        title: "16-快速排序",
        path: "/blog/notes/program/16",
      },
      {
        title: "17-归并排序",
        path: "/blog/notes/program/17",
      },
    ],
  },
];
