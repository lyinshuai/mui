---
order: 13
title:
  zh-CN: 自定义模态的宽度
  en-US: To customize the width of modal
---

## zh-CN

使用 `width` 来设置模态对话框的宽度, 默认宽度 480px。

## en-US

Use `width` to set the width of the modal dialog, default width 480px.

```jsx
import React, { useState } from 'react';
import { Modal, Button, Space } from '@m-design/mui';

const DefalutWidth = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal of defalut(480px) width
      </Button>
      <Modal
        title="我是主要信息，我是主要"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>
          我是文案限制长度，我是文案限制长度，我是文案限制长度，我是
          是文案限制长度我是文案限制长度，我是文案限制长度，我是文是
          案限制长度我是文案限制长度，我是文案限制长度
        </p>
      </Modal>
    </>
  );
};

const MaxWidth = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal of 960px width
      </Button>
      <Modal
        title="我是主要信息，我是主要"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={960}
      >
        <p>
          我是文案限制长度，我是文案限制长度，我是文案限制长度，我是
          是文案限制长度我是文案限制长度，我是文案限制长度，我是文是
          案限制长度我是文案限制长度，我是文案限制长度
        </p>
      </Modal>
    </>
  );
};

const App = () => {

  return (
    <Space>
      <DefalutWidth />
      <MaxWidth />
    </Space>
  );
};

ReactDOM.render(<App />, mountNode);
```
