---
order: 5
title:
  zh-CN: Promise 接口
  en-US: Promise interface
---

## zh-CN

可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 Message 将要结束时通过 then 显示新的 Message 。

## en-US

`Message` provides a promise interface for `onClose`. The above example will display a new Message when the old Message is about to close.

```jsx
import { Message, Button } from '@m-design/mui';

const success = () => {
  Message
    .loading('Action in progress..', 2.5)
    .then(() => Message.success('Loading finished', 2.5))
    .then(() => Message.info('Loading finished is finished', 2.5));
};

ReactDOM.render(<Button onClick={success}>Display sequential messages</Button>, mountNode);
```
