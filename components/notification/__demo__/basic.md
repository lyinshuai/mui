---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法，4.5 秒后自动关闭。

## en-US

The simplest usage that close the Notification box after 4.5s.

```jsx
import { Button, Notification } from '@m-design/mui';

const openNotification = () => {
  Notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the Notification. This is the content of the Notification. This is the content of the Notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

ReactDOM.render(
  <Button type="primary" onClick={openNotification}>
    Open the Notification box
  </Button>,
  mountNode,
);
```
