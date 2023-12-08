---
order: 5
title:
  zh-CN: 更新消息内容
  en-US: Update Message Content
---

## zh-CN

可以通过唯一的 `key` 来更新内容。

## en-US

Update Message content with unique `key`.

```jsx
import { Button, Message } from '@m-design/mui';

const key = 'updatable';

const openMessage = () => {
  Message.loading({ content: 'Loading...', key });
  setTimeout(() => {
    Message.success({ content: 'Loaded!', key, duration: 2 });
  }, 1000);
};

ReactDOM.render(
  <Button type="primary" onClick={openMessage}>
    Open the Message box
  </Button>,
  mountNode,
);
```
