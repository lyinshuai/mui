`````
开发指南

# 常见问题

这里汇总了一些在使用组件库时常见的一些问题。
`````

## 引用mui.css开发编译时终端出现警告 “Failed to parse source map”

create-react-app 脚手架引用'@m-design/mui/dist/mui.css'出现警告。

```
Failed to parse source map: 'webpack://@m-design/mui/./components/config-provider/style/index.less' URL is not supported
```

原因：
脚手架不支持less的source map。

解决方法：
引用 import '@m-design/mui/dist/mui.min.css'，使脚手架不触发source map检测。




## M Design 支持时区吗？

M Design 内部使用 `dayjs`，但是兼容了 `moment` 的逻辑。因为 `dayjs` 不支持时区，所以如果有时区需求可以配置 webpack 的 alias，使用 `moment` 代替 `dayjs`，如下：

```
resolve: {
  alias: {
    dayjs$: 'moment-timezone'
  }
}
```

然后，在项目入口全局设置时区，如下：

```js
import moment from 'moment-timezone';

moment.tz.setDefault('America/Los_Angeles');
```

这样，你就可以在项目中使用 `moment` 了。

## 支持服务端渲染 (SSR) 吗？

支持服务端渲染。

## 使用 `Trigger` 组件实现的弹出 如 `Tooltip` `Popover` `Select` 等组件，弹出框位置不对，或者在滚动时弹出框没有跟随滚动。

弹出框默认挂载在 `body` 下，如果你的滚动容器不是 `body`，那么你需要设置 `getPopupContainer` 来将弹出框挂载到你滚动的容器内。
切记 `getPopupContainer` 设置的容器，样式里需要加上 `position: relative`。

## 为什么 null 和 "" 在 Select 组件中被当作有值而不显示 placeholder ？

`null` 和 `''` 在 Select 中都被认为是值，如下：

```js
<Select>
  <Option value={null}>未选择</Option>
  <Option value={''}>留空</Option>
  <Option value="male">男</Option>
  <Option value="female">女</Option>
</Select>
```

## `Tooltip` 等弹出组件包裹组件时，弹出不生效？

因为组件需要接收 Tooltip 等弹出组件需要把事件透传到包裹元素的 dom 上，所以自定义组件需要对上层传下来的参数做处理，有两种解决方案：

1. 组件外层包裹一层 div。

```js
<Tooltip>
  <div>
    <MyComponent />
  </div>
</Tooltip>
```

2. 组件内解构上层 props 到最外层 dom 上。

```js
<Tooltip>
  <MyComponent />
</Tooltip>

function MyComponent(props) {
  const { a,b,c, ...rest } = props;
  return <div {...rest} />
}
```

## `Popconfirm`、 `Tooltip` 、`Popover` 嵌套使用的时候，只生效了一个 ?

例如：
```js
<Popover
  // ...
>
  <Tooltip
    // ....
  >
    <Button>click</Button>
  </Tooltip>
</Popover>
```
`Tooltip` 生效，`Popover`不生效。可以在 `Tooltip` 外层包一个 `span` 标签。


## 如何替换 css 类名前缀

1. 通过 `ConfigProvider` 全局配置组件的 `prefixCls`：

```js
// 这样所有组件的类名前缀都会变为 ss，默认是 m。
<ConfigProvider prefixCls="ss">
  <App />
</ConfigProvider>
```

2. 通过 `modifyVars` 配置 less 里的 `prefix` 变量：

```diff
// webpack.config.js

module.exports = {
  rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader',
    }, {
      loader: 'less-loader',
+     options: {
+       modifyVars: {
+         prefix: 'ss',
+       },
+       javascriptEnabled: true
+     },
    }],
    ...
  }],
  ...
}
```

3. 通过 `Modal.config` 配置静态方法创建的对话框的 `prefixCls` 前缀：

```js
Modal.config({
   prefixCls: 'ss',
})
```

经过以上三步操作，M Design 中的组件类名前缀和样式前缀都将变为 `ss-`。

## Modal 和 Drawer 打开后，输入控件无法输入？

因为 `Modal` 和 `Drawer` 组件默认会开启 `focusLock`，所以会导致焦点被锁定在 `Modal` 和 `Drawer` 中，导致外部输入控件无法获取焦点。
可以给组件设置 `focusLock={false}`，或者通过 `ConfigProvider` 组件全局配置 `componentConfig={{ Modal: { focusLock: false } }}`。
