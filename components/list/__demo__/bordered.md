---
order: 2
title:
  zh-CN: 边框
  en-US: bordered
---

## zh-CN

设置 `bordered` 为 true 开启边框效果。

## en-US

Set `bordered` to true to enable border effects.

```jsx
import { List, Typography, Divider } from '@m-design/mui';

const data = new Array(4).fill('列表内容列表内容列表内容');

ReactDOM.render(
  <>
    <List dataSource={data} bordered renderItem={item => <List.Item>{item}</List.Item>} />
  </>,
  mountNode,
);
```
