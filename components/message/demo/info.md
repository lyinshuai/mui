---
order: 0
title:
  zh-CN: 普通提示
  en-US: Normal prompt
---

## zh-CN

普通消息反馈。

## en-US

Normal messagez.

```jsx
import { message, Button } from '@m-design/mui';

const open = () => {
  message.open({
    content: 'This is a normal message',
    closeIcon: true,
  });
};

ReactDOM.render(
  <Button type="primary" onClick={open}>
    Display normal message
  </Button>,
  mountNode,
);
```
