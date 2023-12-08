---
order: 3
title:
  zh-CN: 加载状态
  en-US: Loading status
---

## zh-CN

默认情况下，加载效果是不显示的，可通过设置 loader=true 显示默认加载效果。

## en-US

By default, the loading effect is not displayed. You can set loader=true to display the default loading effect.

```jsx
import React from 'react';
import { Image, Button, Space } from '@m-design/mui';

function ImageDemo() {
  const [random, setRandom] = React.useState('');

  return (
    <Space size={12}>
      <Image
        width={200}
        heihgt={200}
        src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
        loader
      />
      <Button
        type="primary"
        onClick={() => {
          setRandom(Date.now());
        }}
      >
        Reload
      </Button>
    </Space>
  );
}

ReactDOM.render(<ImageDemo />, mountNode);
```
