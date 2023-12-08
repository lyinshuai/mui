---
order: 5
title:
  zh-CN: 未授权
  en-US: Not Authorized
---

## zh-CN

你没有此页面的访问权限。

## en-US

you are not authorized to access this page.

```jsx
import { Result, Button } from '@m-design/mui';

ReactDOM.render(
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary">Back Home</Button>}
  />,
  mountNode,
);
```