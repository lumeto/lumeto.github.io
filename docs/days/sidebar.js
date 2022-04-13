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
      },
      {
        title: "2-JS-Web-API-DOM",
      },
      {
        title: "3-JS-Web-API-BOM",
      },
      {
        title: "4-JS-Web-API-事件",
      },
      {
        title: "5-JS-Web-API-Ajax",
      },
      {
        title: "6-JS-Web-API-存储",
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
        title: "2-let&const",
      },
      {
        title: "3-数组处理方法",
      },
      {
        title: "4-对象处理方法",
      },
    ],
  },
  {
    title: "异步",
    collapsable: true,
    // children: [
    //   {
    //     title: "表单元素",
    //   },
    // ],
  },
  {
    title: "Vue进阶",
    collapsable: true,
    // children: [
    //   {
    //     title: "表单元素",
    //   },
    // ],
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
  {
    title: "编程题",
    collapsable: true,
    // children: [
    //   {
    //     title: "表单元素",
    //   },
    // ],
  },
];
