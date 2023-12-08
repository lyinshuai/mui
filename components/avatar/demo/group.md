---
order: 4
title:
  zh-CN: Avatar.Group
  en-US: Avatar.Group
---

## zh-CN

头像组合展现。

## en-US

Avatar group display.

```tsx
import { Avatar, Divider, Tooltip } from '@m-design/mui';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';

const Demo = () => (
  <>
    <Avatar.Group>
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      <Avatar style={{ color: '#fff', backgroundColor: '#f56a00' }}>K</Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar style={{ color: '#fff', backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ color: '#fff', backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
    </Avatar.Group>
    <Divider />
    <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      <Avatar style={{ color: '#fff', backgroundColor: '#f56a00' }}>K</Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar style={{ color: '#fff',  backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ color: '#fff', backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
    </Avatar.Group>
    <Divider />
    <Avatar.Group
      maxCount={2}
      size="large"
      maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
    >
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      <Avatar style={{ color: '#fff',  backgroundColor: '#f56a00' }}>K</Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar style={{color: '#fff', backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ color: '#fff', backgroundColor: '#fff' }} icon={<AntDesignOutlined />} />
    </Avatar.Group>
    <Divider />
    <Avatar.Group
      maxCount={2}
      maxPopoverTrigger="click"
      size="large"
      maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
    >
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar style={{ color: '#fff',  backgroundColor: '#f56a00' }}>K</Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar style={{ color: '#fff', backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ color: '#fff', backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
    </Avatar.Group>
  </>
);

ReactDOM.render(<Demo />, mountNode);
```
