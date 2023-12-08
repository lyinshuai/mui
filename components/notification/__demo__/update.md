---
order: 7
title:
  zh-CN: 更新消息内容
  en-US: Update Message Content
---

## zh-CN

可以通过唯一的 key 来更新内容。

## en-US

Update content with unique key.

```jsx
import { Button, Notification } from '@m-design/mui';

const key = 'updatable';

const openNotification = () => {
  Notification.open({
    key,
    message: 'Notification Title',
    description: 'description.',
  });
  setTimeout(() => {
    Notification.open({
      key,
      message: 'New Title',
      description: 'New description.',
    });
  }, 1000);
};

ReactDOM.render(
  <Button type="primary" onClick={openNotification}>
    Open the Notification box
  </Button>,
  mountNode,
);
```
