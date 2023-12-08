`````
组件 / 反馈

# 通知提醒框 Notification

全局展示通知提醒，将信息及时有效的传达给用户。
`````

%%Content%%

## API

### Notification

- `notification.success(config)`
- `notification.error(config)`
- `notification.info(config)`
- `notification.warning(config)`
- `notification.warn(config)`
- `notification.open(config)`
- `notification.close(key: String)`
- `notification.destroy()`

config 参数如下：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| bottom | 消息从底部弹出时，距离底部的位置，单位像素 | number | 24 |
| btn | 自定义关闭按钮 | ReactNode | - |
| className | 自定义 CSS class | string | - |
| closeIcon | 自定义关闭图标 | ReactNode | - |
| description | 通知提醒内容，必选 | ReactNode | - |
| duration | 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭 | number | 4.5 |
| getContainer | 配置渲染节点的输出位置 | () => HTMLNode | () => document.body |
| icon | 自定义图标 | ReactNode | - |
| key | 当前通知唯一标志 | string | - |
| message | 通知提醒标题，必选 | ReactNode | - |
| placement | 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight` | string | `topRight` |
| style | 自定义内联样式 | [CSSProperties](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794) | - |
| top | 消息从顶部弹出时，距离顶部的位置，单位像素 | number | 24 |
| onClick | 点击通知时触发的回调函数 | function | - |
| onClose | 当通知关闭时触发 | function | - |

还提供了一个全局配置方法，在调用前提前配置，全局一次生效。

- `notification.config(options)`

  > 当你使用 `ConfigProvider` 进行全局化配置时，系统会默认自动开启 RTL 模式
  >
  > 当你想单独使用，可通过如下设置开启 RTL 模式。

```js
notification.config({
  placement: 'bottomRight',
  bottom: 50,
  duration: 3,
  rtl: true,
});
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| bottom | 消息从底部弹出时，距离底部的位置，单位像素 | number | 24 |  |
| closeIcon | 自定义关闭图标 | ReactNode | - |  |
| duration | 默认自动关闭延时，单位秒 | number | 4.5 |  |
| getContainer | 配置渲染节点的输出位置 | () => HTMLNode | () => document.body |  |
| placement | 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight` | string | `topRight` |  |
| rtl | 是否开启 RTL 模式 | boolean | false |  |
| top | 消息从顶部弹出时，距离顶部的位置，单位像素 | number | 24 |  |
| maxCount | 最大显示数, 超过限制时，最早的消息会被自动关闭 | number | - |  |
