---
order: 3
title:
  zh-CN: 三种大小
  en-US: Three sizes
---

## zh-CN

`size="small"` 表示小号开关, `size="mini"` 标识迷你号开关。

## en-US

`size="small"` represents a small sized switch, `size="mini"` represents a mini sized switch

```jsx
import { Switch } from '@m-design/mui';

ReactDOM.render(
  <>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
    <br />
    <Switch size="mini" defaultChecked />
  </>,
  mountNode,
);
```
