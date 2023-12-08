---
order: 2
title:
  zh-CN: 自定义页脚
  en-US: Customized Footer
---

## zh-CN

更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。

不需要默认确定取消按钮时，你可以把 `footer` 设为 `null`。

## en-US

A more complex example which define a customized footer button bar. The dialog will change to loading state after clicking the submit button, and when the loading is done, the modal dialog will be closed.

You could set `footer` to `null` if you don't need default footer buttons.

```jsx
import React, { useState } from 'react';
import { Modal, Button, Space } from '@m-design/mui';

const MultipleButtons = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsModalVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal of multiple buttons
      </Button>
      <Modal
        visible={isModalVisible}
        title="我是主要信息，我是主要"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            取消
          </Button>,
          <Button key="ok" type="primary" loading={loading} onClick={handleOk}>
            确定
          </Button>,
          <Button key="link" type="primary" loading={loading} onClick={handleOk}>
            重置
          </Button>,
        ]}
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

const NotFooter = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal of not footer
      </Button>
      <Modal
        visible={isModalVisible}
        title="我是主要信息，我是主要"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
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
    <Space wrap>
      <MultipleButtons />
      <NotFooter />
    </Space>
  );
};

ReactDOM.render(<App />, mountNode);
```
