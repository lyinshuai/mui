---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
---

## zh-CN

基本使用。

## en-US

Basic usage example.

```jsx
import { Input } from '@m-design/mui';
import { UserOutlined } from '@ant-design/icons';

ReactDOM.render(
  <>
    <Input placeholder="Basic usage" />
    <br />
    <br />
    <Input placeholder="Basic usage" disabled />
    <br />
    <br />
    <Input placeholder="Basic usage" disabled prefix={<UserOutlined />} value="input value" />
  </>,
  mountNode,
);
```
