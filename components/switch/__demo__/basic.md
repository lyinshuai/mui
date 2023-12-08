---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

The most basic usage.

```jsx
import { Switch } from '@m-design/mui';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

ReactDOM.render(<Switch defaultChecked onChange={onChange} />, mountNode);
```

```css
.component-switch-demo .m-design-switch {
  margin-bottom: 8px;
}
```
