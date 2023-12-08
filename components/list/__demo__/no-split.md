---
order: 1
title:
  zh-CN: 无分割线
  en-US: No split
---

## zh-CN

可设置 `split` false，去除分割线效果。

## en-US

You can set `split` false to remove the split line effect.

```jsx
import { List } from '@m-design/mui';

const data = new Array(4).fill('列表内容列表内容列表内容');

ReactDOM.render(
  <>
    <List dataSource={data} split={false} renderItem={item => <List.Item>{item}</List.Item>} />
  </>,
  mountNode,
);
```
