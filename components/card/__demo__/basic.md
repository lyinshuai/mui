---
order: 0
title:
  zh-CN: 典型卡片
  en-US: Basic card
---

## zh-CN

包含标题、内容、操作区域。

## en-US

A basic card containing a title, content and an extra corner content. Supports two sizes: `default` and `small`.

```jsx
import { Card } from '@m-design/mui';

ReactDOM.render(
  <div id="components-card-demo-basic" style={{ height: 200 }}>
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300,float: 'left',marginRight: 30 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300,float:'left' }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>,
  mountNode,
);
```
