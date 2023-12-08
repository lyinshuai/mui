---
order: 5
title:
  zh-CN: 文本域
  en-US: TextArea
---

## zh-CN

用于多行输入。

## en-US

For multi-line input.

```jsx
import { Input } from '@m-design/mui';

const { TextArea } = Input;

ReactDOM.render(
  <>
    <TextArea rows={4} />
    <br />
    <br />
    <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
    <br />
    <br />
    <TextArea status="error" placeholder="Error" />
    <br />
    <br />
    <TextArea status="warning" placeholder="warning" />
    <br />
    <br />
    <TextArea status="success" placeholder="success" />
  </>,
  mountNode,
);
```
