---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

点击 TimePicker，然后可以在浮层中选择或者输入某一时间。

## en-US

Click `TimePicker`, and then we could select or input a time in panel.

```jsx
import { TimePicker } from '@m-design/mui';
import moment from 'moment';

function onChange(time, timeString) {
  console.log(time, timeString);
}

ReactDOM.render(
  <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />,
  mountNode,
);
```
```css
.component-timepicker-demo .m-design-picker{
  margin: 0 8px 12px 0;
}
.m-design-row-rtl .component-timepicker-demo .m-design-picker {
  margin: 0 0 12px 8px;
}
```
