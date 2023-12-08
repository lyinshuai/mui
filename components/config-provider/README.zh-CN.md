`````
组件 / 其他

# 全局配置 ConfigProvider

在应用的最外层进行配置，一次设置，全局生效。一般用于设置国际化语言等功能。
`````

%%Content%%

## API

### ConfigProvider

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoInsertSpaceInButton | 设置为 `false` 时，移除按钮中 2 个汉字之间的空格 | boolean | true |  |
| componentSize | 设置 组件大小 | `small` \| `middle` \| `large` | - |  |
| csp | 设置 [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) 配置 | { nonce: string } | - |  |
| direction | 设置文本展示方向。 [示例](#components-config-provider-demo-direction) | `ltr` \| `rtl` | `ltr` |  |
| dropdownMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。`false` 时会关闭虚拟滚动 | boolean \| number | - |  |
| form | 设置 Form 组件的通用属性 | { validateMessages?: [ValidateMessages](/components/form/#validateMessages), requiredMark?: boolean \| `optional` } | - | |
| getPopupContainer | 弹出框（Select, Tooltip, Menu 等等）渲染父节点，默认渲染到 body 上。 | function(triggerNode) | () => document.body |  |
| getTargetContainer | 配置 Affix、Anchor 滚动监听容器。 | () => HTMLElement | () => window | |
| iconPrefixCls | 设置图标统一样式前缀。注意：需要配合 `less` 变量 [@iconfont-css-prefix](https://github.com/ant-design/ant-design/blob/d943b85a523bdf181dabc12c928226f3b4b893de/components/style/themes/default.less#L106) 使用 | string |  |  |
| input | 设置 Input 组件的通用属性 | { autoComplete?: string } | - |  |
| locale | 语言包配置，语言包可到 [m-design/lib/locale]目录下寻找 | object | - |  |
| pageHeader | 统一设置 PageHeader 的 ghost，参考 [PageHeader](/components/page-header) | { ghost: boolean } | true |  |
| prefixCls | 设置统一样式前缀。注意：需要配合 `less` 变量 [@ant-prefix](https://github.com/ant-design/ant-design/blob/2c6c789e3a9356f96c47aea0083f5a15538315cf/components/style/themes/default.less#L7) 使用 | string | `ant` |  |
| renderEmpty | 自定义组件空状态。参考 [空状态](/components/empty/) | function(componentName: string): ReactNode | - |  |
| space | 设置 Space 的 `size`，参考 [Space](/components/space) | { size: `small` \| `middle` \| `large` \| `number` } | - |  |
| virtual | 设置 `false` 时关闭虚拟滚动 | boolean | - | |

### ConfigProvider.config() 

设置 `Modal`、`Message`、`Notification` rootPrefixCls。

```jsx
ConfigProvider.config({
  prefixCls: 'ant', // 4.13.0+
  iconPrefixCls: 'anticon', // 4.17.0+
});
```
