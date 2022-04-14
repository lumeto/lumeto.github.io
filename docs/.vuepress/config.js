const moment = require("moment");
module.exports = {
  title: "lume-博客",
  description: "高级前端进阶之路",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/ilogo.png",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  themeConfig: {
    nav: require("./navbar.js"),
    sidebar: require("./sidebar.js"),
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    sidebarDepth: 2,
    lastUpdated: "Last Updated",
    author: "",
    authorAvatar: "/avatar.png",
    record: "xxxx",
    startYear: "2017",
    smoothScroll: true,
  },
  plugins: [
    "@vuepress/back-to-top",
    [
      "@vuepress/active-header-links",
      {
        sidebarLinkSelector: ".sidebar-link",
        headerAnchorSelector: ".header-anchor",
      },
    ],
    [
      "copyright",
      {
        noCopy: false,
        minLength: 20,
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4"],
    anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: "#" },
    externalLinks: { target: "_blank", rel: "noopener noreferrer" },
    toc: { includeLevel: [2, 3] },
  },
};
