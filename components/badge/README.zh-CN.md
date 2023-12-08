`````
组件 / 数据展示

# 徽标数 Badge

一般出现在图标或文字的右上角。提供及时、重要的信息提示。
`````

%%Content%%

## API

### Badge

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| color | 自定义小圆点的颜色 | string | - |  |
| count | 展示的数字，大于 overflowCount 时显示为 `${overflowCount}+`，为 0 时隐藏 | ReactNode | - |  |
| dot | 不展示数字，只有一个小红点 | boolean | false |  |
| offset | 设置状态点的位置偏移 | \[number, number] | - |  |
| overflowCount | 展示封顶的数字值 | number | 99 |  |
| showZero | 当数值为 0 时，是否展示 Badge | boolean | false |  |
| size | 在设置了 `count` 的前提下有效，设置小圆点的大小 | `default` \| `small` | - |  |
| status | 设置 Badge 为状态点 | `success` \| `processing` \| `default` \| `error` \| `warning` | - |  |
| text | 在设置了 `status` 的前提下有效，设置状态点的文本 | ReactNode | - |  |
| title | 设置鼠标放在状态点上时显示的文字 | string | - |  |

### Badge.Ribbon

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| color | 自定义缎带的颜色 | string | - |  |
| placement | 缎带的位置，`start` 和 `end` 随文字方向（RTL 或 LTR）变动 | `start` \| `end` | `end` |  |
| text | 缎带中填入的内容 | ReactNode | - |  |
