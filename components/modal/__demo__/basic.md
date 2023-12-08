---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

第一个对话框。

## en-US

Basic modal.

```jsx
import React, { useState } from 'react';
import { Modal, Button, Space } from '@m-design/mui';

const ONE_LINE_TEXT = '我是文案限制长度，我是文案限制长度，我是文案限制长度，我是';
const TWO_LINE_TEXT =
  '我是文案限制长度，我是文案限制长度，我是文案限制长度，我是是文案限制长度我是文案限制长度，我是文案限制长度';
const THREE_LINE_TEXT =
  '我是文案限制长度，我是文案限制长度，我是文案限制长度，我是是文案限制长度我是文案限制长度，我是文案限制长度，我是文是案限制长度我是文案限制长度，我是文案限制长度';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [content, setContent] = useState('');

  const showModal = text => {
    setContent(text);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setContent('');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setContent('');
  };

  return (
    <>
      <Space wrap>
        <Button type="primary" onClick={() => showModal(THREE_LINE_TEXT)}>
          Open Modal of three lines text
        </Button>

        <Button type="primary" onClick={() => showModal(TWO_LINE_TEXT)}>
          Open Modal of tow lines text
        </Button>

        <Button type="primary" onClick={() => showModal(ONE_LINE_TEXT)}>
          Open Modal of one line text
        </Button>
      </Space>
      <Modal
        title="我是主要信息，我是主要"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{content}</p>
      </Modal>
    </>
  );
};

ReactDOM.render(<App />, mountNode);
```
