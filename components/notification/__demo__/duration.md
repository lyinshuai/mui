---
order: 1
title:
  zh-CN: 自动关闭的延时
  en-US: Duration after which the Notification box is closed
---

## zh-CN

自定义通知框自动关闭的延时，默认 `4.5s`，取消自动关闭只要将该值设为 `0` 即可。

## en-US

`Duration` can be used to specify how long the Notification stays open. After the duration time elapses, the Notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0, the Notification box will never close automatically.

```jsx
import { Button, Notification } from '@m-design/mui';

const openNotification = () => {
  const args = {
    message: 'Notification Title',
    description:
      'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
    duration: 0,
  };
  Notification.open(args);
};

ReactDOM.render(
  <Button type="primary" onClick={openNotification}>
    Open the Notification box
  </Button>,
  mountNode,
);
```
