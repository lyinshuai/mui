---
order: 19
version: 4.19.0
title:
  zh-CN: 自定义状态
  en-US: Status
---

## zh-CN

使用 `status` 为 Input 添加状态，可选 `error` 或者 `warning` 或者 `success`。

## en-US

Add status to Input with `status`, which could be `error` or `warning` or `success`.

```tsx
import { Input, Space } from '@m-design/mui';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';

const ValidateInputs: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Input status="error" placeholder="Error" />
    <Input status="warning" placeholder="Warning" />
    <Input status="success" placeholder="Success" />
    <Input status="error" prefix={<ClockCircleOutlined />} placeholder="Error with prefix" />
    <Input status="warning" prefix={<ClockCircleOutlined />} placeholder="Warning with prefix" />
    <Input status="success" prefix={<ClockCircleOutlined />} placeholder="Success with prefix" />
  </Space>
);

ReactDOM.render(<ValidateInputs />, mountNode);
```
