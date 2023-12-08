---
order: 4
title:
  zh-CN: 基础样式
  en-US: Basic style
---

## zh-CN

基础样式。

## en-US

Basic style.

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
    size="large"
    splitShrink
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar size={48} src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="#">{item.title}</a>}
          description="M Design, a design language for background applications, is refined by Meetsocial UED Team and the front-end team."
        />
      </List.Item>
    )}
  />,
  mountNode,
);
```
