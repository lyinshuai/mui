---
order: 2
title:
  zh-CN: 容错处理
  en-US: Fault tolerant
---

## zh-CN

加载失败显示图像占位符。

## en-US

Load failed to display image placeholder.

```jsx
import { Image } from '@m-design/mui';

function ImageDemo() {
  return (
    <Image
      width={200}
      height={200}
      src="error"
      fallback="https://joeschmoe.io/api/v1/random"
    />
  );
}

ReactDOM.render(<ImageDemo />, mountNode);
```
