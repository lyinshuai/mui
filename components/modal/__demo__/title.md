---
order: 2
title:
  zh-CN: 标题
  en-US: Title
---

## zh-CN

需要空标题占位时，你可以把 `title` 设为 `<div />`。

## en-US

When need an empty title placeholder, you can set `title` to `<div />`.

```jsx
import React, { useState } from 'react';
import { Modal, Button, Space } from '@m-design/mui';
import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';

const NotTitle = () => {
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
        Open untitled modal
      </Button>
      <Modal visible={isModalVisible} title={<div />} onOk={handleOk} onCancel={handleCancel}>
        <p>
          我是文案限制长度，我是文案限制长度，我是文案限制长度，我是
          是文案限制长度我是文案限制长度，我是文案限制长度，我是文是
          案限制长度我是文案限制长度，我是文案限制长度
        </p>
      </Modal>
    </>
  );
};

const IconTitle = () => {
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
        Title with icon
      </Button>
      <Modal
        visible={isModalVisible}
        title={
          <>
            <InfoCircleOutlined className="site-modal-title-icon" />
            我是主要信息，我是主要
          </>
        }
        onOk={handleOk}
        onCancel={handleCancel}
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
      <NotTitle />
      <IconTitle />
    </Space>
  );
};

ReactDOM.render(<App />, mountNode);
```

```css
.site-modal-title-icon {
  margin-right: 8px;
  color: #2171fe;
}
```
