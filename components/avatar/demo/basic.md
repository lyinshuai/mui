---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

头像有三种尺寸，两种形状可选。

## en-US

Three sizes and two shapes are available.

```tsx
import { Avatar } from '@m-design/mui';
import { UserOutlined } from '@ant-design/icons';

ReactDOM.render(
  <>
    <div>
      <Avatar size={64} icon={<UserOutlined />} />
      <Avatar size="large" icon={<UserOutlined />} />
      <Avatar icon={<UserOutlined />} />
      <Avatar size="small" icon={<UserOutlined />} />
    </div>
    <div>
      <Avatar shape="square" size={64} icon={<UserOutlined />} />
      <Avatar shape="square" size="large" icon={<UserOutlined />} />
      <Avatar shape="square" icon={<UserOutlined />} />
      <Avatar shape="square" size="small" icon={<UserOutlined />} />
    </div>
  </>,
  mountNode,
);
```

<style>
#components-avatar-demo-basic .m-design-avatar {
  margin-top: 16px;
  margin-right: 16px;
}
.m-design-row-rtl #components-avatar-demo-basic .m-design-avatar {
  margin-right: 0;
  margin-left: 16px;
}
</style>
