---
order: 1
title:
  zh-CN: 标题组件
  en-US: Title Component
---

## zh-CN

展示不同级别的标题。

## en-US

Display title in different level.

```jsx
import { Typography } from '@m-design/mui';

const { Title } = Typography;

ReactDOM.render(
  <>
    <Title>h1. M Design</Title>
    <Title level={2}>h2. M Design</Title>
    <Title level={3}>h3. M Design</Title>
    <Title level={4}>h4. M Design</Title>
    <Title level={5}>h5. M Design</Title>
  </>,
  mountNode,
);
```
