`````
组件 / 数据展示

# 折叠面板 Collapse

可以折叠 / 展开的内容区域。
`````

%%Content%%

## API

### Collapse

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| accordion | 手风琴模式 | boolean | false |  |
| activeKey | 当前激活 tab 面板的 key | string\[] \| string <br/> number\[] \| number | 默认无，accordion 模式下默认第一个元素 |  |
| bordered | 带边框风格的折叠面板 | boolean | true |  |
| collapsible | 所有子面板是否可折叠或指定可折叠触发区域 | `header` \| `disabled` | - |  |
| defaultActiveKey | 初始化选中面板的 key | string\[] \| string<br/> number\[] \| number | - |  |
| destroyInactivePanel | 销毁折叠隐藏的面板 | boolean | false |  |
| expandIcon | 自定义切换图标 | (panelProps) => ReactNode | - |  |
| expandIconPosition | 设置图标位置 | `left` \| `right` | - |  |
| ghost | 使折叠面板透明且无边框 | boolean | false |  |
| onChange | 切换面板的回调 | function | - |  |

### Collapse.Panel

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| collapsible | 是否可折叠或指定可折叠触发区域 | `header` \| `disabled` | - |  |
| extra | 自定义渲染每个面板右上角的内容 | ReactNode | - |  |
| forceRender | 被隐藏时是否渲染 DOM 结构 | boolean | false |  |
| header | 面板头内容 | ReactNode | - |  |
| key | 对应 activeKey | string \| number | - |  |
| showArrow | 是否展示当前面板上的箭头 | boolean | true |  |
