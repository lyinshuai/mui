---
order: 1
title:
  zh-CN: 多彩标签
  en-US: Colorful Tag
---

## zh-CN

我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。

## en-US

We preset a series of colorful tag styles for use in different situations. You can also set it to a hex color string for custom color.

```jsx
import { Tag, Divider } from '@m-design/mui';

ReactDOM.render(
  <>
    <Divider orientation="left">Presets</Divider>
    <div>
      <Tag color="magenta">magenta</Tag>
      <Tag color="red">red</Tag>
      <Tag color="volcano">volcano</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="gold">gold</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <Tag color="purple">purple</Tag>
    </div>
    <Divider orientation="left">Custom</Divider>
    <div>
      <Tag color="#F53F3F">#F53F3F</Tag>
      <Tag color="#722ED1">#722ED1</Tag>
      <Tag color="#00B42A">#00B42A</Tag>
      <Tag color="#2171FE">#2171FE</Tag>
      <Tag color="#FF7D00">#FF7D00</Tag>
      <Tag color="#F5319D">#F5319D</Tag>
      <Tag color="#D91AD9">#D91AD9</Tag>
      <Tag color="#F7BA1E">#F7BA1E</Tag>
      <Tag color="#0FC6C2">#0FC6C2</Tag>
      <Tag color="#3491FA">#3491FA</Tag>
      <Tag color="#86909C">#86909C</Tag>
    </div>
  </>,
  mountNode,
);
```

<style>
.code-box-demo .m-design-tag {
  margin-bottom: 8px;
}
</style>
