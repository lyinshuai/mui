---
order: 6
title:
  zh-CN: 找不到页面
  en-US: Not Found
---

## zh-CN

此页面未找到。

## en-US

The page you visited does not exist.

```jsx
import { Result, Button } from '@m-design/mui';

ReactDOM.render(
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  />,
  mountNode,
);
```
