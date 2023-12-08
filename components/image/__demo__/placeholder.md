---
order: 4
title:
  zh-CN: 占位状态
  en-US: Placeholder status
---

## zh-CN

没有图片源时的占位显示

## en-US

Placeholder display without picture source

```jsx
import { Image } from '@m-design/mui';

function ImageDemo() {
  return <Image width={200} height={200} placeholder />;
}

ReactDOM.render(<ImageDemo />, mountNode);
```
