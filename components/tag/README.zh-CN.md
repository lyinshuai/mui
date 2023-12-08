`````
组件 / 数据展示

# 标签 Tag

用于信息的选择、筛选、分类。用户通过标签进行信息反馈和交互操作。
`````

%%Content%%

## API

### Tag

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| closable | 标签是否可以关闭（点击默认关闭） | boolean | false |  |
| closeIcon | 自定义关闭按钮 | ReactNode | - |  |
| color | 标签色 | string | - |  |
| icon | 设置图标 | ReactNode | - |  |
| visible | 是否显示标签 | boolean | true |  |
| onClose | 关闭时的回调（可通过 `e.preventDefault()` 来阻止默认行为） | (e) => void | - |  |

### Tag.CheckableTag

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 设置标签的选中状态 | boolean | false |
| onChange | 点击标签时触发的回调 | (checked) => void | - |
