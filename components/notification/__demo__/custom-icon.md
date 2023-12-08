---
order: 4
title:
  zh-CN: 自定义图标
  en-US: Customized Icon
---

## zh-CN

图标可以被自定义。

## en-US

The icon can be customized to any react node.

```jsx
import { Button, Notification } from '@m-design/mui';
import { SmileOutlined } from '@ant-design/icons';

const openNotification = () => {
  Notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the Notification. This is the content of the Notification. This is the content of the Notification.',
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
  });
};

ReactDOM.render(
  <Button type="primary" onClick={openNotification}>
    Open the Notification box
  </Button>,
  mountNode,
);
```
