---
order: 2
title:
  zh-CN: 文本与超链接组件
  en-US: Text and Link Component
---

## zh-CN

内置不同样式的文本以及超链接组件。

## en-US

Provides multiple types of text and link.

```jsx
import { Typography, Space } from '@m-design/mui';

const { Text, Link } = Typography;

ReactDOM.render(
  <Space direction="vertical">
    <Text>M Design (default)</Text>
    <Text type="secondary">M Design (secondary)</Text>
    <Text type="success">M Design (success)</Text>
    <Text type="warning">M Design (warning)</Text>
    <Text type="danger">M Design (danger)</Text>
    <Text disabled>M Design (disabled)</Text>
    <Text mark>M Design (mark)</Text>
    <Text code>M Design (code)</Text>
    <Text keyboard>M Design (keyboard)</Text>
    <Text underline>M Design (underline)</Text>
    <Text delete>M Design (delete)</Text>
    <Text strong>M Design (strong)</Text>
    <Text italic>M Design (italic)</Text>
    <Link href="#" target="_blank">
      M Design (Link)
    </Link>
  </Space>,
  mountNode,
);
```
