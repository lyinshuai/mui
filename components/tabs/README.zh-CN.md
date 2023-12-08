`````
组件 / 数据展示

# 标签页 Tabs

将内容组织同一视图中，一次可查看一个视图内容。查看其他内容可切换选项卡查看。
`````

%%Content%%

## API

### Tabs

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| activeKey | 当前激活 tab 面板的 key | string | - |  |
| addIcon | 自定义添加按钮 | ReactNode | - |  |
| animated | 是否使用动画切换 Tabs, 仅生效于 `tabPosition="top"` | boolean \| { inkBar: boolean, tabPane: boolean } | { inkBar: true, tabPane: false } |  |
| centered | 标签居中展示 | boolean | false |  |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | string | `第一个面板` |  |
| hideAdd | 是否隐藏加号图标，在 `type="editable-card"` 时有效 | boolean | false |  |
| moreIcon | 自定义折叠 icon | ReactNode | &lt;EllipsisOutlined /> |  |
| renderTabBar | 替换 TabBar，用于二次封装标签头 | (props: DefaultTabBarProps, DefaultTabBar: React.ComponentClass) => React.ReactElement | - |  |
| size | 大小，提供 `large` `default` 和 `small` 三种大小 | string | `default` |  |
| tabBarExtraContent | tab bar 上额外的元素 | ReactNode \| {left?: ReactNode, right?: ReactNode} | - | |
| tabBarGutter | tabs 之间的间隙 | number | - |  |
| tabBarStyle | tab bar 的样式对象 | object | - |  |
| tabPosition | 页签位置，可选值有 `top` `right` `bottom` `left` | string | `top` |  |
| destroyInactiveTabPane | 被隐藏时是否销毁 DOM 结构 | boolean | false |  |
| type | 页签的基本样式，可选 `line`、`text`、`fill`、`card`、`card-gutter`、`editable-card`、`card-large` 类型 | string | `line` |  |
| scrollType | 滚动样式，可选 `arrow`、`collapse` 类型 | string | `arrow` |  |
| onChange | 切换面板的回调 | function(activeKey) {} | - |  |
| onEdit | 新增和删除页签的回调，在 `type="editable-card"` 时有效 | (targetKey, action): void | - |  |
| onTabClick | tab 被点击的回调 | function(key: string, event: MouseEvent) | - |  |
| onTabScroll | tab 滚动时触发 | function({ direction: `left` \| `right` \| `top` \| `bottom` }) | - |  |

### Tabs.TabPane

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| closeIcon | 自定义关闭图标，`在 type="editable-card"`时有效 | ReactNode | - |
| forceRender | 被隐藏时是否渲染 DOM 结构 | boolean | false |
| key | 对应 activeKey | string | - |
| tab | 选项卡头显示文字 | ReactNode | - |
