---
order: 13
title:
  zh-CN: 加载中
  en-US: loading
---

## zh-CN

使用 `mask` 来设置模态对话框的遮罩层

## en-US

Use `masl` to set the mask of the modal dialog.

```jsx
import React, { useState } from 'react';
import { Modal, Button, Spin } from '@m-design/mui';

const App = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setLoading(true);
    setVisible(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Content loading...
      </Button>
      <Modal
        title="我是主要信息，我是主要"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {loading ? (
          <div className="example">
            <Spin /> <span>数据加载中...</span>
          </div>
        ) : (
          <p>
            我是文案限制长度，我是文案限制长度，我是文案限制长度，我是
            是文案限制长度我是文案限制长度，我是文案限制长度，我是文是
            案限制长度我是文案限制长度，我是文案限制长度
          </p>
        )}
      </Modal>
    </>
  );
};

ReactDOM.render(<App />, mountNode);
```

```css
.example {
  margin: 20px 0;
  padding: 30px 50px;
  color: #2171fe;
  text-align: center;
}
```
