---
order: 2
title:
  zh-CN: 带有图标的通知提醒框
  en-US: Notification with icon
---

## zh-CN

通知提醒框左侧有图标。

## en-US

A Notification box with a icon at the left side.

```jsx
import { Button, Notification, Space } from '@m-design/mui';

const openNotificationWithIcon = type => {
  Notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the Notification. This is the content of the Notification. This is the content of the Notification.',
  });
};

ReactDOM.render(
  <Space>
    <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
    <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
    <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
    <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
  </Space>,
  mountNode,
);
```
