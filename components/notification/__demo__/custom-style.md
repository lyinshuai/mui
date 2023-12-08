---
order: 6
title:
  zh-CN: 自定义样式
  en-US: Customized style
---

## zh-CN

使用 style 和 className 来定义样式。

## en-US

The style and className are available to customize Notification.

```jsx
import { Button, Notification } from '@m-design/mui';

const openNotification = () => {
  Notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the Notification. This is the content of the Notification. This is the content of the Notification.',
    className: 'custom-class',
    style: {
      width: 600,
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
