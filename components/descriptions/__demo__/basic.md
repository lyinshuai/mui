---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

简单的展示。

## en-US

Simplest Usage.

```jsx
import { Radio, Descriptions } from '@m-design/mui';

const Demo = ({ column, layout, width, colon }) => {
  return (
    <Descriptions title="User Info" column={column} layout={layout} colon={colon} labelStyle={{ width }}>
      <Descriptions.Item label="UserName">Socrates</Descriptions.Item>
      <Descriptions.Item label="Hometown">Beijing</Descriptions.Item>
      <Descriptions.Item label="Mobile">136-6333-2888</Descriptions.Item>
      <Descriptions.Item label="Residence">Beijing</Descriptions.Item>
      <Descriptions.Item label="Address">Yingdu Building, Zhi</Descriptions.Item>
    </Descriptions>
  );
};

const App = () => {
  const [column, setColumn] = React.useState(3);
  const [layout, setLayout] = React.useState('horizontal');
  const [width, setWidth] = React.useState('auto');
  const [colon, setColon] = React.useState(true);

  return (
    <>
      <span>列数：</span>
      <Radio.Group onChange={e => setColumn(e.target.value)} value={column}>
        <Radio value={3}>3列</Radio>
        <Radio value={2}>2列</Radio>
        <Radio value={1}>1列</Radio>
      </Radio.Group>
      <br />
      <br />
      <span>布局：</span>
      <Radio.Group onChange={e => setLayout(e.target.value)} value={layout}>
        <Radio value="horizontal">水平</Radio>
        <Radio value="vertical">垂直</Radio>
      </Radio.Group>
      <br />
      <br />
      <span>标签宽度：</span>
      <Radio.Group onChange={e => setWidth(e.target.value)} value={width}>
        <Radio value="auto">自动</Radio>
        <Radio value="100px">100px</Radio>
      </Radio.Group>
      <br />
      <br />
      <span>冒号：</span>
      <Radio.Group onChange={e => setColon(e.target.value)} value={colon}>
        <Radio value={true}>有</Radio>
        <Radio value={false}>无</Radio>
      </Radio.Group>
      <br />
      <br />
      <Demo column={column} layout={layout} width={width} colon={colon} />
    </>
  );
};

ReactDOM.render(<App />, mountNode);
```
