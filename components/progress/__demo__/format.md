---
order: 6
title:
  zh-CN: 自定义文字格式
  en-US: Custom text format
---

## zh-CN

`format` 属性指定格式。

## en-US

You can set a custom text by setting the `format` prop.

```jsx
import { Progress } from '@m-design/mui';

ReactDOM.render(
  <>
    <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
    <Progress type="circle" percent={100} format={() => 'Done'} />
  </>,
  mountNode,
);
```

```css
div.m-design-progress-circle,
div.m-design-progress-line {
  margin-right: 8px;
  margin-bottom: 8px;
}
[class*='-col-rtl'] div.m-design-progress-circle,
[class*='-col-rtl'] div.m-design-progress-line {
  margin-right: 0;
  margin-left: 8px;
}
```
