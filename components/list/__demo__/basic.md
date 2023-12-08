---
order: 0
title:
  zh-CN: 基础列表
  en-US: Basic List
---

## zh-CN

基础列表

## en-US

Basic List

```jsx
import { List } from '@m-design/mui';

const data = new Array(4).fill('列表内容列表内容列表内容');

ReactDOM.render(
  <>
    <List dataSource={data} renderItem={item => <List.Item>{item}</List.Item>} />
  </>,
  mountNode,
);
```
