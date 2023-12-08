---
order: 7
title:
  zh-CN: 服务器错误
  en-US: Server Error
---

## zh-CN

服务器发生了错误。

## en-US

Something went wrong on server.

```jsx
import { Result, Button } from '@m-design/mui';

ReactDOM.render(
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary">Back Home</Button>}
  />,
  mountNode,
);
```
