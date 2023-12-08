---
order: 5
title:
  zh-CN: 位置
  en-US: Placement
---

## zh-CN

通知从右上角、右下角、左下角、左上角弹出。

## en-US

A Notification box can appear from the `topRight`, `bottomRight`, `bottomLeft` or `topLeft` of the viewport.

```jsx
import { Button, Notification, Divider, Space } from '@m-design/mui';
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from '@ant-design/icons';

const openNotification = placement => {
  Notification.info({
    message: `Notification ${placement}`,
    description:
      'This is the content of the Notification. This is the content of the Notification. This is the content of the Notification.',
    placement,
  });
};

ReactDOM.render(
  <div>
    <Space>
      <Button type="primary" onClick={() => openNotification('topLeft')}>
        <RadiusUpleftOutlined />
        topLeft
      </Button>
      <Button type="primary" onClick={() => openNotification('topRight')}>
        <RadiusUprightOutlined />
        topRight
      </Button>
    </Space>
    <Divider />
    <Space>
      <Button type="primary" onClick={() => openNotification('bottomLeft')}>
        <RadiusBottomleftOutlined />
        bottomLeft
      </Button>
      <Button type="primary" onClick={() => openNotification('bottomRight')}>
        <RadiusBottomrightOutlined />
        bottomRight
      </Button>
    </Space>
  </div>,
  mountNode,
);
```
