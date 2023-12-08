---
order: 0
title: M Design of React
---

`mui` 是基于 M Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。

<div class="pic-plus">
  <img width="125" src="https://s3.meetsocial.cn/mdesign/assets/favicon.svg"/>
  <span>+</span>
  <img width="160" src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"/>
</div>

<style>
.pic-plus > * {
  display: inline-block !important;
  vertical-align: middle;
}
.pic-plus span {
  margin: 0 20px;
  color: #aaa;
  font-size: 30px;
}
</style>

---

## ✨ 特性

- 🌈 提炼自企业级中后台产品的交互语言和视觉风格。
- 📦 开箱即用的高质量 React 组件。
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件。
- ⚙️ 全链路开发和设计工具体系。
- 🌍 数十个国际化语言支持。
- 🎨 深入每个细节的主题定制能力。

## 兼容环境

- 现代浏览器和 IE11（需要 [polyfills](https://cdn.polyfill.io/v3/url-builder/)）。
- 支持服务端渲染。
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --- | --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

对于 IE 系列浏览器，需要提供相应的 Polyfill 支持，建议使用 [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) 来解决浏览器兼容问题。如果你在使用 [umi](http://umijs.org/)，可以直接使用 [targets](https://umijs.org/zh/config/#targets) 配置。

## 安装

### 切换安装源
mui为内网组件库，请确保安装源正确

```bash
npm config set registry http://192.168.1.55:8081/repository/npm-all/
// or
yarn config set registry http://192.168.1.55:8081/repository/npm-all/
```

### 使用 npm 或 yarn 安装

```bash
$ npm install @m-design/mui --save
```

```bash
$ yarn add @m-design/mui
```


### 浏览器引入

在浏览器中使用 `script` 和 `link` 标签直接引入文件，并使用全局变量 `mui`。

我们在 npm 发布包内的 `mui/dist` 目录下提供了 `mui.js` `mui.css` 以及 `mui.min.js` `mui.min.css`。

> **强烈不推荐使用已构建文件**，这样无法按需加载，而且难以获得底层依赖模块的 bug 快速修复支持。

> 注意：`antd.js` 和 `antd.min.js` 依赖 `react/react-dom/moment`，请确保提前引入这些文件。


## 示例

```jsx
import { DatePicker } from '@m-design/mui';

ReactDOM.render(<DatePicker />, mountNode);
```

引入样式：

```jsx
import '@m-design/mui/dist/mui.css'; // or '@m-design/mui/dist/mui.less'
```

### 按需加载

`mui` 的 JS 代码默认支持基于 ES modules 的 tree shaking。

### TypeScript

`mui` 使用 TypeScript 进行书写并提供了完整的定义文件。