---
order: 1
title:
  zh-CN: 标准样式
  en-US: Basic Page Header
---

## zh-CN

标准页头，适合使用在需要简单描述的场景。

## en-US

Standard header, suitable for use in scenarios that require a brief description.

```jsx
import { PageHeader, Space } from '@m-design/mui';

ReactDOM.render(
  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title="Title"
      subTitle="This is a subtitle"
    />
    <PageHeader
      className="site-page-header"
      title="Title"
      subTitle="This is a subtitle"
    />
  </Space>,
  mountNode,
);
```

```css
.site-page-header {
  border: 1px solid rgb(235, 237, 240);
}
```
