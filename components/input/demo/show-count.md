---
order: 12
title:
  zh-CN: 带字数提示
  en-US: With character counting
---

## zh-CN

展示字数提示。

## en-US

Show character counting.

```jsx
import { Input } from '@m-design/mui';

const { TextArea } = Input;

const onChange = e => {
  console.log('Change:', e.target.value);
};

ReactDOM.render(
  <>
    <Input showCount maxLength={20} onChange={onChange} />
    <br />
    <br />
    <TextArea showCount maxLength={100} onChange={onChange} />
  </>,
  mountNode,
);
```
