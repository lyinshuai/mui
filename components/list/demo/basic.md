---
order: 1
title:
  zh-CN: 基础列表
  en-US: Basic list
---

## zh-CN

基础列表。

## en-US

Basic list.

```jsx
import { List, Avatar } from '@m-design/mui';

const data = [
  {
    title: 'M Design Title 1',
  },
  {
    title: 'M Design Title 2',
  },
  {
    title: 'M Design Title 3',
  },
  {
    title: 'M Design Title 4',
  },
];

ReactDOM.render(
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="#">{item.title}</a>}
          description="M Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />,
  mountNode,
);
```
