---
order: 0
title:
  zh-CN: 基本结构
  en-US: Basic Structure
---

## zh-CN

典型的页面布局。

## en-US

Classic page layouts.

```jsx
import { Layout } from '@m-design/mui';

const { Header, Footer, Sider, Content } = Layout;

ReactDOM.render(
  <div id="components-layout-demo-basic">
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </div>,
  CONTAINER,
);
```

```css
#components-layout-demo-basic{
  text-align: center;
}
#components-layout-demo-basic .m-design-layout-header,
#components-layout-demo-basic .m-design-layout-footer {
  color: #fff;
  background: #7dbcea;
}
[data-theme="dark"] #components-layout-demo-basic .m-design-layout-header {
  background: #6aa0c7;
}
[data-theme="dark"] #components-layout-demo-basic .m-design-layout-footer {
  background: #6aa0c7;
}
#components-layout-demo-basic .m-design-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .m-design-layout-sider {
  color: #fff;
  line-height: 120px;
  background: #3ba0e9;
}
[data-theme="dark"] #components-layout-demo-basic .m-design-layout-sider {
  background: #3499ec;
}
#components-layout-demo-basic .m-design-layout-content {
  min-height: 120px;
  color: #fff;
  line-height: 120px;
  background: rgba(16, 142, 233, 1);
}
[data-theme="dark"] #components-layout-demo-basic .m-design-layout-content {
  background: #107bcb;
}
#components-layout-demo-basic  > .m-design-layout + .m-design-layout {
  margin-top: 48px;
}
```
