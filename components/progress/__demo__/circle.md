---
order: 1
title:
  zh-CN: 进度圈
  en-US: Circular progress bar
---

## zh-CN

圈形的进度。

## en-US

A circular progress bar.

```jsx
import { Progress } from '@m-design/mui';

ReactDOM.render(
  <>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={90} status="paused" />
    <Progress type="circle" percent={100} />
  </>,
  mountNode,
);
```

```css
.m-design-progress-circle-wrap,
.m-design-progress-line-wrap {
  margin-right: 8px;
  margin-bottom: 5px;
}
```
