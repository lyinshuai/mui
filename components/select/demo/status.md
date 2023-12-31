---
order: 25
version: 4.19.0
title:
  zh-CN: 自定义状态
  en-US: Status
---

## zh-CN

使用 `status` 为 Select 添加状态，可选 `error` 或者 `warning` 或者 `success`。

## en-US

Add status to Select with `status`, which could be `error` or `warning` or `success`.

```tsx
import { Select, Space } from '@m-design/mui';

const Status: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Select status="error" style={{ width: '100%' }} />
    <Select status="warning" style={{ width: '100%' }} />
    <Select status="success" style={{ width: '100%' }} />
  </Space>
);

ReactDOM.render(<Status />, mountNode);
```

```css
#components-select-demo-status .ant-select {
  margin: 0;
}
```
