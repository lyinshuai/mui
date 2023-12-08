---
order: 0
title: M Design of React
---

Following the M Design specification, we developed a React UI library `mui` that contains a set of high quality components and demos for building rich, interactive user interfaces.

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

## ✨ Features

- 🌈 Enterprise-class UI designed for web applications.
- 📦 A set of high-quality React components out of the box.
- 🛡 Written in TypeScript with predictable static types.
- ⚙️ Whole package of design resources and development tools.
- 🌍 Internationalization support for dozens of languages.
- 🎨 Powerful theme customization in every detail.

## Environment Support

- Modern browsers and Internet Explorer 11 (with [polyfills](https://cdn.polyfill.io/v3/url-builder/))
- Server-side Rendering
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --- | --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

Polyfills are needed for IE browsers. We recommend [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) for it. You can set `targets` config if you are using [umi](http://umijs.org/).


## Installation

### Toggle registry
mui is an intranet component library. Please ensure that the installation source is correct

```bash
npm config set registry http://192.168.1.55:8081/repository/npm-all/
// or
yarn config set registry http://192.168.1.55:8081/repository/npm-all/
```


### Using npm or yarn

```bash
$ npm install @m-design/mui
```

```bash
$ yarn add @m-design/mui
```

### Import in Browser

Add `script` and `link` tags in your browser and use the global variable `mui`.

We provide `mui.js` `mui.css` and `mui.min.js` `mui.min.css` under `mui/dist` in mui's npm package. 

> **We strongly discourage loading the entire files** this will add bloat to your application and make it more difficult to receive bugfixes and updates. Mui is intended to be used in conjunction with a build tool, such as [webpack](https://webpack.github.io/), which will make it easy to import only the parts of mui that you are using.

> Note: you should import react/react-dom/moment before using mui.js.

## Usage

```jsx
import { DatePicker } from '@m-design/mui';

ReactDOM.render(<DatePicker />, mountNode);
```

And import stylesheets manually:

```jsx
import '@m-design/mui/dist/mui.css'; // or '@m-design/mui/dist/mui.less'
```

### Use modularized mui

`mui` supports ES modules tree shaking by default for JS part.

### TypeScript

`mui` provides a built-in ts definition.