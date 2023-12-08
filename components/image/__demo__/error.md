---
order: 1
title:
  zh-CN: 错误状态
  en-US: Error status
---

## zh-CN

当加载图片失败的时候显示的内容。

## en-US

The content displayed when loading the picture fails.

```jsx
import { Image } from '@m-design/mui';

function ImageDemo() {
  return <Image width={200} height={200} src="error" alt="some-error" />;
}

ReactDOM.render(<ImageDemo />, mountNode);
```
