---
order: 5
title:
  zh-CN: 其他字符
  en-US: Other Character
---

## zh-CN

可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。

## en-US

Replace the default star to other character like alphabet, digit, iconfont or even Chinese word.

```jsx
import { Rate } from '@m-design/mui';
import { HeartFilled } from '@ant-design/icons';

ReactDOM.render(
  <>
    <Rate character={<HeartFilled />} allowHalf defaultValue={3.5} />
    <br />
    <Rate character="A" allowHalf defaultValue={4} style={{ fontSize: 16 }} />
    <br />
    <Rate character="好" allowHalf defaultValue={3.5} style={{ fontSize: 16 }} />
  </>,
  mountNode,
);
```
