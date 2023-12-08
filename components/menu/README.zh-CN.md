`````
组件 / 导航

# 菜单 Menu

收纳、排列并展示一系列选项的列表。
`````

%%Content%%

## API

### Menu

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultOpenKeys | 初始展开的 SubMenu 菜单项 key 数组 | string\[] | - |  |
| defaultSelectedKeys | 初始选中的菜单项 key 数组 | string\[] | - |  |
| expandIcon | 自定义展开图标 | ReactNode \| `(props: SubMenuProps & { isSubMenu: boolean }) => ReactNode` | - | 4.9.0 |
| forceSubMenuRender | 在子菜单展示之前就渲染进 DOM | boolean | false |  |
| inlineCollapsed | inline 时菜单是否收起状态 | boolean | - |  |
| hasCollapseButton | 是否内置折叠按钮 | boolean | - |  |
| inlineIndent | inline 模式的菜单缩进宽度 | number | 24 |  |
| mode | 菜单类型，现在支持垂直、水平、和内嵌模式三种 | `vertical` \| `horizontal` \| `inline` | `vertical` |  |
| multiple | 是否允许多选 | boolean | false |  |
| openKeys | 当前展开的 SubMenu 菜单项 key 数组 | string\[] | - |  |
| overflowedIndicator | 自定义 Menu 折叠时的图标 | ReactNode | - |  |
| selectable | 是否允许选中 | boolean | true |  |
| selectedKeys | 当前选中的菜单项 key 数组 | string\[] | - |  |
| style | 根节点样式 | CSSProperties | - |  |
| subMenuCloseDelay | 用户鼠标离开子菜单后关闭延时，单位：秒 | number | 0.1 |  |
| subMenuOpenDelay | 用户鼠标进入子菜单后开启延时，单位：秒 | number | 0 |  |
| theme | 主题颜色 | `light` \| `dark` | `light` |  |
| triggerSubMenuAction | SubMenu 展开/关闭的触发行为 | `hover` \| `click` | `hover` |  |
| onClick | 点击 MenuItem 调用此函数 | function({ item, key, keyPath, domEvent }) | - |  |
| onDeselect | 取消选中时调用，仅在 multiple 生效 | function({ item, key, keyPath, selectedKeys, domEvent }) | - |  |
| onOpenChange | SubMenu 展开/关闭的回调 | function(openKeys: string\[]) | - |  |
| onInlineCollapsedChange | 折叠状态改变时的回调 | (collapse: boolean) => void | - |  |
| onSelect | 被选中时调用 | function({ item, key, keyPath, selectedKeys, domEvent }) | -   |  |

> 更多属性查看 [rc-menu](https://github.com/react-component/menu#api)

### Menu.Item

| 参数     | 说明                     | 类型      | 默认值 | 版本  |
| -------- | ------------------------ | --------- | ------ | ----- |
| danger   | 展示错误状态样式         | boolean   | false  | 4.3.0 |
| disabled | 是否禁用                 | boolean   | false  |       |
| icon     | 菜单图标                 | ReactNode | -      | 4.2.0 |
| key      | item 的唯一标志          | string    | -      |       |
| title    | 设置收缩时展示的悬浮标题 | string    | -      |       |

> 注意：`icon` 是 `4.2.0` 新增的属性，之前的版本请使用下面的方式定义图标。
>
> ```jsx
> <Menu.Item>
>   <PieChartOutlined />
>   <span>Option 1</span>
> </Menu.Item>
> <Menu.SubMenu
>   title={
>     <>
>       <PieChartOutlined />
>       <span>Option 2</span>
>     </>
>   }
> >
>   ...
> </Menu.SubMenu>
> ```

### Menu.SubMenu

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| children | 子菜单的菜单项 | Array&lt;MenuItem \| SubMenu> | - |  |
| disabled | 是否禁用 | boolean | false |  |
| icon | 菜单图标 | ReactNode | - | 4.2.0 |
| key | 唯一标志 | string | - |  |
| popupClassName | 子菜单样式，`mode="inline"` 时无效 | string | - |  |
| popupOffset | 子菜单偏移量，`mode="inline"` 时无效 | \[number, number] | - |  |
| title | 子菜单项值 | ReactNode | - |  |
| onTitleClick | 点击子菜单标题 | function({ key, domEvent }) | - |  |

### Menu.ItemGroup

| 参数     | 说明         | 类型        | 默认值 | 版本 |
| -------- | ------------ | ----------- | ------ | ---- |
| children | 分组的菜单项 | MenuItem\[] | -      |      |
| title    | 分组标题     | ReactNode   | -      |      |

### Menu.Divider

菜单项分割线，只用在弹出菜单内。

| 参数   | 说明     | 类型    | 默认值 | 版本   |
| ------ | -------- | ------- | ------ | ------ |
| dashed | 是否虚线 | boolean | false  | 4.17.0 |

## FAQ

### 为何 Menu 的子元素会渲染两次？

Menu 通过[二次渲染](https://github.com/react-component/menu/blob/f4684514096d6b7123339cbe72e7b0f68db0bce2/src/Menu.tsx#L543)收集嵌套结构信息以支持 HOC 的结构。合并成一个推导结构会使得逻辑变得十分复杂，欢迎 PR 以协助改进该设计。
