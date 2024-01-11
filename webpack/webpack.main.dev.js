const path = require("path");
const baseConfig = require("./webpack.base.js");
const webpackMerge = require("webpack-merge");

const mainConfig = {
  entry: path.resolve(__dirname, "../app/main/electron.js"),
  output: {
    filename: "electron.js",
    path: path.resolve(__dirname, "../dist"),
  },
  // 👇 由于 JS 的应用场景日益增长，从浏览器到 Node，运行在不同环境下的 JS 代码存在一些差异。target 配置项可以让 Webpack 构建出不同运行环境的代码
  // target配置项 官网查询 https://webpack.docschina.org/configuration/target/
  // 此项代表 编译electron主进程
  target: "electron-main",
  devtool: "inline-source-map",
  mode: "development",
};

// 通过 webpack-merge 合并导出一份完整的配置。
module.exports = webpackMerge.merge(baseConfig, mainConfig);
