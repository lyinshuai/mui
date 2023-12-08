---
order: 0
title:
  zh-CN: 进度条
  en-US: Progress bar
---

## zh-CN

标准的进度条。

## en-US

A standard progress bar.

```jsx
import React, { useState } from 'react';
import { Radio, Space, Progress } from '@m-design/mui';

const Demo = () => {
  const [size, setSize] = useState('default');
  return (
    <>
      <Space>
        size:
        <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
          <Radio.Button value="small">small</Radio.Button>
          <Radio.Button value="default">default</Radio.Button>
          <Radio.Button value="large">large</Radio.Button>
        </Radio.Group>
      </Space>
      <br />
      <br />
      <Progress percent={30} size={size} />
      <Progress percent={50} size={size} status="active" />
      <Progress percent={60} size={size} status="paused" />
      <Progress percent={70} size={size} status="exception" />
      <Progress percent={100} size={size} />
      <Progress percent={50} size={size} showInfo={false} />
      <Progress percent={60} size={size} success={{ percent: 30 }} />
    </>
  );
};

ReactDOM.render(<Demo />, mountNode);
```
