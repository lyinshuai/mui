---
order: 3
title:
  zh-CN: 自定义按钮
  en-US: Custom close button
---

## zh-CN

自定义关闭按钮的样式和文字。

## en-US

To customize the style or font of the close button.

```jsx
import { Button, Notification } from '@m-design/mui';

const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};

const openNotification = () => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button type="primary" size="small" onClick={() => Notification.close(key)}>
      Confirm
    </Button>
  );
  Notification.open({
    message: 'Notification Title',
    description:
      'A function will be be called after the Notification is closed (automatically after the "duration" time of manually).',
    btn,
    key,
    onClose: close,
  });
};

ReactDOM.render(
  <Button type="primary" onClick={openNotification}>
    Open the Notification box
  </Button>,
  mountNode,
);
```
