---
order: 23
title:
  zh-CN: 无边框
  en-US: Bordered-less
---

## zh-CN

无边框样式。

## en-US

Bordered-less style component.

```jsx
import { Select } from '@m-design/mui';

const { Option } = Select;

ReactDOM.render(
  <div class="component-select-demo">
    <Select defaultValue="lucy" style={{ width: 120 }} bordered={false}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} disabled bordered={false}>
      <Option value="lucy">Lucy</Option>
    </Select>
  </div>,
  mountNode,
);
```