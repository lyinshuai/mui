---
order: 4
title:
  zh-CN: 迷你
  en-US: Mini size
---

## zh-CN

迷你版本。

## en-US

Mini size pagination.

```jsx
import { Pagination } from '@m-design/mui';

function showTotal(total) {
  return `Total ${total} items`;
}

ReactDOM.render(
  <div id="components-pagination-demo-mini">
    <Pagination size="small" total={50} />
    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
    <Pagination size="small" total={50} showTotal={showTotal} />
    <Pagination
      size="small"
      total={50}
      disabled
      showTotal={showTotal}
      showSizeChanger
      showQuickJumper
    />
  </div>,
  mountNode,
);
```

```css
#components-pagination-demo-mini .m-design-pagination:not(:last-child) {
  margin-bottom: 24px;
}
```
