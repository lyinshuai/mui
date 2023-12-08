---
order: 10
title:
  zh-CN: 三种大小
  en-US: Three sizes of Input
---

## zh-CN

tree 尺寸有三种，小、中、大，高度分别为 `32px`、`36px` 和 `40px`，作用于节点高。

## en-US

Tree has three sizes: small, middle and large. The heights are '32px', '36px' and '40px' respectively.

```jsx
import { Tree, Radio } from '@m-design/mui';

const treeData = [
  {
    title: 'Trunk 1',
    key: '0-0',
    children: [
      {
        title: 'Branch 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'Leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'Leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'Branch 1-1',
        key: '0-0-1',
        children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
      },
    ],
  },
];

class Demo extends React.Component {
  state = { size: 'small' };

  onChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Radio.Group value={size} onChange={this.onChange} style={{ marginBottom: 16 }}>
          <Radio.Button value="small">default</Radio.Button>
          <Radio.Button value="middle">middle</Radio.Button>
          <Radio.Button value="large">large</Radio.Button>
        </Radio.Group>
        <Tree treeData={treeData} height={233} defaultExpandAll size={size} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
