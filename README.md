<p align="center">
  <a href="https://mui.meetsocial.cn">
  <img width="125" src="https://s3.meetsocial.cn/mdesign/assets/favicon.svg"/>
  </a>
</p>


<h1 align="center">M Design</h1>

<div align="center">

一套企业级 UI 设计语言和 React 组件库。

[![CI status][github-action-image]][github-action-url] [![codecov][codecov-image]][codecov-url]

[github-action-image]: https://github.com/ant-design/ant-design/workflows/%E2%9C%85%20test/badge.svg
[github-action-url]: https://github.com/ant-design/ant-design/actions?query=workflow%3A%22%E2%9C%85+test%22
[codecov-image]: https://img.shields.io/codecov/c/github/ant-design/ant-design/master.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/ant-design/ant-design/branch/masterant-design

</div>


## ✨ 特性

- 🌈 提炼自企业级中后台产品的交互语言和视觉风格。
- 📦 开箱即用的高质量 React 组件。
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件。
- ⚙️ 全链路开发和设计工具体系。
- 🌍 数十个国际化语言支持。
- 🎨 深入每个细节的主题定制能力。

## 🖥 兼容环境

- 现代浏览器和 IE11（需要 [polyfills](https://cdn.polyfill.io/v3/url-builder/)）。
- 支持服务端渲染。
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 📦 安装

```bash
npm install @m-design/mui --save
```

```bash
yarn add @m-design/mui
```

## 🔨 示例

```jsx
import { Button, DatePicker } from '@m-design/mui';

const App = () => (
  <>
    <Button type="primary">PRESS ME</Button>
    <DatePicker />
  </>
);
```

引入样式：

```jsx
import '@m-design/mui/dist/mui.css'; // or '@m-design/mui/dist/mui.less'
```

### 🛡 TypeScript

参考 [在 TypeScript 中使用](https://mui.meetsocial.com/docs/react/use-in-typescript-cn)。

## 🌍 国际化

参考 [国际化文档](https://mui.meetsocial.com/docs/react/i18n-cn)。
