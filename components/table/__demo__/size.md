---
order: 11
title:
  en-US: size
  zh-CN: 尺寸
---

## zh-CN

两种紧凑型的列表，小型列表只用于对话框内。

## en-US

There are two compacted table sizes: `middle` and `small`. The `small` size is used in Modals only.

```jsx
import { Table } from '@m-design/mui';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

ReactDOM.render(
  <div>
    <h4>x-large size table</h4>
    <Table columns={columns} dataSource={data} size="x-large" />
    <h4>large size table</h4>
    <Table columns={columns} dataSource={data} size="large" />
    <h4>Middle size table</h4>
    <Table columns={columns} dataSource={data} size="middle" />
    <h4>Small size table</h4>
    <Table columns={columns} dataSource={data} size="small" />
  </div>,
  mountNode,
);
```

<style>#components-table-demo-size h4 { margin-bottom: 16px; }</style>
