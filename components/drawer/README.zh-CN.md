`````
组件 / 反馈

# 抽屉 Drawer

触发命令后，从屏幕一侧滑出的抽屉式的面板。
`````

%%Content%%

## API
### Drawer

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoFocus | 抽屉展开后是否将焦点切换至其 Dom 节点 | boolean | true |  |
| afterVisibleChange | 切换抽屉时动画结束后的回调 | function(visible) | - |  |
| bodyStyle | 可用于设置 Drawer 内容部分的样式 | CSSProperties | - |  |
| className | 对话框外层容器的类名 | string | - |  |
| closable | 是否显示右上角的关闭按钮 | boolean | true |  |
| closeIcon | 自定义关闭图标 | ReactNode | &lt;CloseOutlined /> |  |
| contentWrapperStyle | 可用于设置 Drawer 包裹内容部分的样式 | CSSProperties | - |  |
| destroyOnClose | 关闭时销毁 Drawer 里的子元素 | boolean | false |  |
| drawerStyle | 用于设置 Drawer 弹出层的样式 | CSSProperties | - |  |
| extra | 抽屉右下角的操作区域 | ReactNode | - |  |
| footer | 抽屉的页脚 | ReactNode | - |  |
| footerStyle | 抽屉页脚部件的样式 | CSSProperties | - |  |
| forceRender | 预渲染 Drawer 内元素 | boolean | false |  |
| getContainer | 指定 Drawer 挂载的 HTML 节点, false 为挂载在当前 dom | HTMLElement \| () => HTMLElement \| Selectors \| false | body |  |
| headerStyle | 用于设置 Drawer 头部的样式 | CSSProperties | - |  |
| height | 高度, 在 `placement` 为 `top` 或 `bottom` 时使用 | string \| number | 256 |  |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |  |
| mask | 是否展示遮罩 | boolean | true |  |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |  |
| maskStyle | 遮罩样式 | CSSProperties | {} |  |
| placement | 抽屉的方向 | `top` \| `right` \| `bottom` \| `left` | `right` |  |
| push | 用于设置多层 Drawer 的推动行为 | boolean \| { distance: string \| number } | { distance: 180 } |  |
| size | 预设抽屉宽度（或高度），default `320px` 和 large `1000px` | 'default' \| 'large' | 'default' |  |
| style | 可用于设置 Drawer 最外层容器的样式，和 `drawerStyle` 的区别是作用节点包括 `mask` | CSSProperties | - |  |
| title | 标题 | ReactNode | - |  |
| visible | Drawer 是否可见 | boolean | - |  |
| width | 宽度 | string \| number | 320 |  |
| zIndex | 设置 Drawer 的 `z-index` | number | 1000 |  |
| onClose | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | - |  |
