---
order: 12
title:
  zh-CN: 大小
  en-US: Size
---

## zh-CN

大小分为三种，小、默认、大

## en-US

Small、default and large

```jsx
import React, { useState } from 'react';
import { Radio, Space, Progress } from '@m-design/mui';

const Demo = () => {
  const [size, setSize] = useState('default');
  const [percent, setPercent] = useState(60);
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
      <Space>
        percent:
        <Radio.Group value={percent} onChange={e => setPercent(e.target.value)}>
          <Radio.Button value={20}>20</Radio.Button>
          <Radio.Button value={40}>40</Radio.Button>
          <Radio.Button value={60}>60</Radio.Button>
          <Radio.Button value={80}>80</Radio.Button>
          <Radio.Button value={100}>100</Radio.Button>
        </Radio.Group>
      </Space>
      <br />
      <br />
      line：
      <br />
      <Progress percent={percent} type="line" size={size} />
      <Progress percent={percent} type="line" size={size} status="paused" />
      <br />
      <br />
      circle：
      <br />
      <Progress percent={percent} type="circle" size={size} />
      <Progress percent={percent} type="circle" size={size} status="paused" />
      <br />
      <br />
      dashboard：
      <br />
      <Progress percent={percent} type="dashboard" size={size} />
      <Progress percent={percent} type="dashboard" size={size} status="paused" />
    </>
  );
};

ReactDOM.render(<Demo />, mountNode);
```
