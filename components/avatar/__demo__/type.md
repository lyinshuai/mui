---
order: 1
title:
  zh-CN: 类型
  en-US: Type
---

## zh-CN

支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

## en-US

Image, Icon and letter are supported, and the latter two kinds of avatar can have custom colors and background colors.

```tsx
import { Avatar, Image } from '@m-design/mui';
import { UserOutlined } from '@ant-design/icons';

ReactDOM.render(
  <div id="components-avatar-demo-type">
    <Avatar icon={<UserOutlined />} />
    <Avatar>U</Avatar>
    <Avatar size={40}>USER</Avatar>
    <Avatar src="https://joeschmoe.io/api/v1/random" />
    <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
    <Avatar style={{ color: '#fff', backgroundColor: '#87d068' }} icon={<UserOutlined />} />
  </div>,
  CONTAINER,
);
```

```css
#components-avatar-demo-type .m-design-avatar {
  margin-top: 16px;
  margin-right: 16px;
}
.m-design-row-rtl #components-avatar-demo-type .m-design-avatar {
  margin-right: 0;
  margin-left: 16px;
}
```
