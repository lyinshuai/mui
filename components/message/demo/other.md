---
order: 1
title:
  zh-CN: 其他提示类型
  en-US: Other types of message
---

## zh-CN

包括信息、成功、失败、警告。

## en-US

Messages of success, error and warning types.

```jsx
import { message, Button, Space } from '@m-design/mui';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';

const info = () => {
  message.info({
    content: 'This is a info message',
    closeIcon: true,
  });
};

const success = () => {
  message.success({
    content: 'This is a success message',
    closeIcon: true,
  });
};

const error = () => {
  message.error({
    content: 'This is an error message',
    closeIcon: true,
  });
};

const warning = () => {
  message.warning({
    content: 'This is a warning message',
    closeIcon: true,
  });
};

ReactDOM.render(
  <Space>
    <Button onClick={info}>Info</Button>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
  </Space>,
  mountNode,
);
```
