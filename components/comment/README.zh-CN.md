`````
组件 / 数据展示

# 评论 Comment

展示评论信息
`````

%%Content%%

## API

### Comment

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| actions | 在评论内容下面呈现的操作项列表 | Array&lt;ReactNode> | - |  |
| author | 要显示为注释作者的元素 | ReactNode | - |  |
| avatar | 要显示为评论头像的元素 | ReactNode | - |  |
| children | 嵌套注释应作为注释的子项提供 | ReactNode | - |  |
| content | 评论的主要内容 | ReactNode | - |  |
| datetime | 展示时间描述 | ReactNode | - |  |
| align | 靠左/靠右 展示 datetime 和 actions | `left` \| `right` \| { datetime?: 'left' \| 'right'; actions?: 'left' \| 'right' } | `left` | 2.0.0 |
