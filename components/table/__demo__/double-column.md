---
order: 101
title:
  en-US: Double Column
  zh-CN: 双列属性表格
---

## zh-CN

不同属性在一列时的效果

## en-US

Effects of different properties in one column

```jsx
import { Table, Tag, Space } from '@m-design/mui';
import { Badge } from '@m-design/mui';

const data = [
  {
    key: '1',
    id: '764324893',
    name: 'shopping_Super Creator_1',
    status: 0,
    statusText: '草稿',
    budget: '28437234.32',
    budgetType: '总预算',
    amount: '28437234.32',
    target: '优化目标',
    startTime: '2021/01/23',
    endTime: '2021/01/54',
  },
  {
    key: '2',
    id: '764324894',
    name: 'shopping_Super Creator_2',
    status: 1,
    statusText: '发布中',
    budget: '28437234.32',
    budgetType: '日预算',
    amount: '28437234.32',
    target: '优化目标',
    startTime: '2021/01/23',
    endTime: '持续投放',
  },
  {
    key: '3',
    id: '764324895',
    name: 'shopping_Super Creator_3',
    status: -1,
    statusText: '发布失败',
    budget: '28437234.32',
    budgetType: '日预算',
    amount: '28437234.32',
    target: '优化目标',
    startTime: '2021/01/23',
    endTime: '持续投放',
  },
];

const statusMap = {
  '-1': 'error',
  0: 'default',
  1: 'processing',
  2: 'success',
};

const subValueStyle = { color: '#86909C', marginTop: '4px' };
const onCell = record => ({ style: { paddingTop: '4px', paddingBottom: '4px' } });

const columns = [
  {
    title: '广告组名称/ID',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => {
      return (
        <>
          <div>{record.name}</div>
          <div style={subValueStyle}>ID：{record.id}</div>
        </>
      );
    },
    onCell,
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (text, record) => {
      return (
        <>
          <Badge status={statusMap[record.status]} text={record.statusText} />
          {record.status === '草稿' && <div style={subValueStyle}>校验通过</div>}
        </>
      );
    },
    onCell,
  },
  {
    title: '预算',
    dataIndex: 'budget',
    align: 'right',
    key: 'budget',
    render: (text, record) => {
      return (
        <>
          <div>{record.budget}</div>
          <div style={subValueStyle}>{record.budgetType}</div>
        </>
      );
    },
    onCell,
  },
  {
    title: '出价金额',
    dataIndex: 'amount',
    align: 'right',
    key: 'amount',
    render: (text, record) => {
      return (
        <>
          <div>{record.amount}</div>
          <div style={subValueStyle}>{record.target}</div>
        </>
      );
    },
    onCell,
  },
  {
    title: '投放时间',
    dataIndex: 'date',
    key: 'date',
    render: (text, record) => {
      return (
        <>
          <span>{record.startTime}</span>
          <span>-{record.endTime}</span>
        </>
      );
    },
    onCell,
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>编辑</a>
        <a>复制</a>
      </Space>
    ),
    onCell,
  },
];

ReactDOM.render(<Table columns={columns} dataSource={data} />, mountNode);
```
