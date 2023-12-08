`````
组件 / 反馈

# 结果 Result

用于反馈一系列操作任务的处理结果，当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。
`````

%%Content%%

## API

### Result

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| extra | 操作区 | ReactNode | - |
| icon | 自定义 icon | ReactNode | - |
| status | 结果的状态，决定图标和颜色 | `success` \| `error` \| `info` \| `warning` \| `404` \| `403` \| `500` | `info` |
| subTitle | subTitle 文字 | ReactNode | - |
| title | title 文字 | ReactNode | - |
