---
order: 4
title:
  zh-CN: 三种大小
  en-US: Sizes
---

## zh-CN

三种大小的选择框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `36px` 和 `24px` ，默认高度为 `32px`。

## en-US

The height of the input field for the select defaults to 32px. If size is set to large, the height will be 36px, and if set to small, 24px.

```jsx
import React, { useState } from 'react';
import { TreeSelect } from '@m-design/mui';

const { TreeNode } = TreeSelect;

const Demo = ({ ...props }) => {
  const [value, setValue] = useState(undefined);
  const onChange = () => {
    setValue(value);
  };
  return (
    <TreeSelect
      showSearch
      style={{ width: '100%' }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      {...props}
    >
      <TreeNode value="parent 1" title="parent 1">
        <TreeNode value="parent 1-0" title="parent 1-0">
          <TreeNode value="leaf1" title="leaf1" />
          <TreeNode value="leaf2" title="leaf2" />
        </TreeNode>
        <TreeNode value="parent 1-1" title="parent 1-1">
          <TreeNode value="leaf3" title={<b style={{ color: '#08c' }}>leaf3</b>} />
        </TreeNode>
      </TreeNode>
    </TreeSelect>
  );
};

ReactDOM.render(
  <>
    <Demo size="small"/>
    <br />
    <Demo />
    <br />
    <Demo size="large"/>
  </>,
  mountNode,
);
```
