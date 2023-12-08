`````
组件 / 数据展示

# 气泡卡片 Popover

鼠标悬停、聚焦或点击在某个组件时，弹出的气泡式的卡片浮层。可以对卡片上的元素进行操作。
`````

%%Content%%

## API

### Popover

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| content | 卡片内容 | ReactNode \| () => ReactNode | - |  |
| title | 卡片标题 | ReactNode \| () => ReactNode | - |  |

更多属性请参考 [Tooltip](/components/tooltip/#API)。

## 注意

请确保 `Popover` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
