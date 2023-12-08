`````
组件 / 数据展示

# 图片 Image

展示和预览图片。
`````

%%Content%%

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| alt | 图像描述 | string | - |  |
| fallback | 加载失败容错地址 | string | - |  |
| height | 图像高度 | string \| number | - |  |
| placeholder | 加载占位, 为 `true` 时且无图片源时使用默认占位 | ReactNode | - |  |
| loader | 加载占位, 为 `true` 时使用默认加载效果，可替代placeholder | ReactNode | - | 2.0.0 |
| title | 标题 | string | - | 2.0.0 |
| description | 描述 | string | - | 2.0.0 |
| actions | 额外操作 | ReactNode[] | - | 2.0.0 |
| actionsCollapse | 额外操作是否收缩 | boolean | false | 2.0.0 |
| footerPosition | 底部信息显示的位置 | `inner` \| `outer` | inner | 2.0.0 |
| preview | 预览参数，为 `false` 时禁用 | boolean \| [previewType](#previewType) | true |  [previewType](#previewType)|
| src | 图片地址 | string | - |  |
| width | 图像宽度 | string \| number | - |  |
| onError | 加载错误回调 | (event: Event) => void | - | |

### previewType

```js
{
  visible?: boolean;
  onVisibleChange?: (visible, prevVisible) => void;
  getContainer?: string | HTMLElement | (() => HTMLElement);
  src?: string; 
  mask?: ReactNode; 
  maskClassName?: string; 
  current?: number; 
}
```

其他属性见 [&lt;img>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes)
