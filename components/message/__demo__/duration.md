---
order: 2
title:
  zh-CN: 修改延时
  en-US: Customize duration
---

## zh-CN

自定义时长 `10s`，默认时长为 `3s`。

## en-US

Customize Message display duration from default `3s` to `10s`.

```jsx
import { Message, Button } from '@m-design/mui';

const success = () => {
  Message.success('This is a prompt Message for success, and it will disappear in 10 seconds', 10);
};

ReactDOM.render(<Button onClick={success}>Customized display duration</Button>, mountNode);
```
