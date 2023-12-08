---
order: 4
title:
  zh-CN: 清除
  en-US: Clear star
---

## zh-CN

支持允许或者禁用清除。

## en-US

Support set allow to clear star when click again.

```jsx
import { Rate } from '@m-design/mui';

ReactDOM.render(
  <>
    <Rate defaultValue={3} />
    <span className="m-design-rate-text">allowClear: true</span>
    <br />
    <Rate allowClear={false} defaultValue={3} />
    <span className="m-design-rate-text">allowClear: false</span>
  </>,
  mountNode,
);
```

```css
.m-design-rate-text {
  display: inline-block;
  margin: 0 8px;
  font-size: 14px;
}
```