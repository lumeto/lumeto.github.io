const { title } = require("../.vuepress/config.js");
module.exports = [
  {
    title: "Css世界",
    collapsable: true,
    children: [
      {
        title: "1-css盒子模型",
        path: "/days/notes/css/1",
      },
      {
        title: "2-css有哪些清除浮动",
        path: "/days/notes/css/2",
      },
      {
        title: "3-常用的css布局",
        path: "/days/notes/css/3",
      },
      {
        title: "4-css响应式布局",
        path: "/days/notes/css/4",
      },
      {
        title: "5-水平垂直居中N种",
        path: "/days/notes/css/5",
      },
      {
        title: "6-line-height 继承",
        path: "/days/notes/css/6",
      },
    ],
  },
  {
    title: "JavaScript基础",
    collapsable: true,
    children: [
      {
        title: "1-变量类型和计算",
        path: "/days/notes/js/1",
      },
      {
        title: "2-JS-Web-API-DOM",
        path: "/days/notes/js/2",
      },
      {
        title: "3-JS-Web-API-BOM",
        path: "/days/notes/js/3",
      },
      {
        title: "4-JS-Web-API-事件",
        path: "/days/notes/js/4",
      },
      {
        title: "5-JS-Web-API-Ajax",
        path: "/days/notes/js/5",
      },
      {
        title: "6-JS-Web-API-存储",
        path: "/days/notes/js/6",
      },
      {
        title: "7-原型和原型链",
        path: "/days/notes/js/7",
      },
    ],
  },
  {
    title: "ES6-10-进阶",
    collapsable: true,
    children: [
      {
        title: "1-你真的会用es6?",
        path: "/days/notes/es6/1",
      },
      {
        title: "2-symbol",
        path: "/days/notes/es6/2",
      },
      {
        title: "3-let和const",
        path: "/days/notes/es6/3",
      },
      {
        title: "4-解构赋值",
        path: "/days/notes/es6/4",
      },
      {
        title: "5-新的对象和方法",
        path: "/days/notes/es6/5",
      },
      {
        title: "6-函数",
        path: "/days/notes/es6/6",
      },
      {
        title: "7-class（类）",
        path: "/days/notes/es6/7",
      },
      {
        title: "8-模块导入和导出",
        path: "/days/notes/es6/8",
      },
      {
        title: "9-异步机制",
        path: "/days/notes/es6/9",
      },
    ],
  },
  {
    title: "异步",
    collapsable: true,
    children: [
      {
        title: "1-JS 基础异步",
        path: "/days/notes/async/1",
      },
      {
        title: "2-JS 进阶异步",
        path: "/days/notes/async/2",
      },
    ],
  },
  {
    title: "Vue进阶",
    collapsable: true,
    children: [
      {
        title: "表单元素",
      },
    ],
  },
  {
    title: "React进阶",
    collapsable: true,
    // children: [
    //   {
    //     title: "表单元素",
    //   },
    // ],
  },
  {
    title: "网络与性能",
    collapsable: true,
    // children: [
    //   {
    //     title: "表单元素",
    //   },
    // ],
  },
];
