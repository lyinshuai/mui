---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic
---

## zh-CN

按钮分为 主要按钮、次要按钮、虚线按钮、文本按钮和链接按钮五种。

## en-US

There are `primary`, `secondary`, `dashed`, `text` and `link` button types.

```jsx
import { Button, Space } from '@m-design/mui';

ReactDOM.render(
  <Space size="large">
    <Button type="primary">Primary</Button>
    <Button type="secondary">Secondary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <Button type="link">link</Button>
  </Space>,
  CONTAINER,
);
```
