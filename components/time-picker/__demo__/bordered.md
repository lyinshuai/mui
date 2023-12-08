---
order: 14
title:
  zh-CN: 无边框
  en-US: Bordered-less
---

## zh-CN

无边框样式。

## en-US

Bordered-less style component.

```jsx
import { TimePicker } from '@m-design/mui';

const { RangePicker } = TimePicker;

ReactDOM.render(
  <div class="component-timepicker-demo">
    <TimePicker bordered={false} />
    <RangePicker bordered={false} />
  </div>,
  mountNode,
);
```
