---
order: 19
version: 4.19.0
title:
  zh-CN: 自定义状态
  en-US: Status
---

## zh-CN

使用 `status` 为 InputNumber 添加状态，可选 `error` 或者 `warning` 或者 `success`。

## en-US

Add status to InputNumber with `status`, which could be `error` or `warning` or `success`.

```tsx
import { InputNumber, Space } from '@m-design/mui';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';

const ValidateInputs: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <InputNumber status="error" style={{ width: '100%' }} />
    <InputNumber status="warning" style={{ width: '100%' }} />
    <InputNumber status="success" style={{ width: '100%' }} />
    <InputNumber status="error" style={{ width: '100%' }} prefix={<ClockCircleOutlined />} />
    <InputNumber status="warning" style={{ width: '100%' }} prefix={<ClockCircleOutlined />} />
    <InputNumber status="success" style={{ width: '100%' }} prefix={<ClockCircleOutlined />} />
  </Space>
);

ReactDOM.render(<ValidateInputs />, mountNode);
```
