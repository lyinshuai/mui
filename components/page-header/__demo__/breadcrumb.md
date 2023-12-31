---
order: 3
title:
  zh-CN: 带面包屑页头
  en-US: Use with breadcrumbs
---

## zh-CN

带面包屑页头，适合层级比较深的页面，让用户可以快速导航。

## en-US

With breadcrumbs, it is suitable for deeper pages, allowing users to navigate quickly.

```jsx
import { PageHeader } from '@m-design/mui';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

ReactDOM.render(
  <PageHeader
    className="site-page-header-ghost-wrapper"
    title="Title"
    breadcrumb={{ routes }}
    subTitle="This is a subtitle"
    onBack={() => null}
    breadcrumbInline={false}
    ghost={false}
  />,
  mountNode,
);
```

```css
.site-page-header-ghost-wrapper {
  padding: 24px;
  background-color: #f5f5f5;
}
```
