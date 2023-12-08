---
order: 13
title:
  zh-CN: 无遮罩层
  en-US: Not mask
---

## zh-CN

使用 `mask` 来设置模态对话框的遮罩层

## en-US

Use `masl` to set the mask of the modal dialog.

```jsx
import React, { useState } from 'react';
import { Modal, Button } from '@m-design/mui';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open not Mask of Modal
      </Button>
      <Modal
        title="我是主要信息，我是主要"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        mask={false}
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


ReactDOM.render(<App />, mountNode);
```
