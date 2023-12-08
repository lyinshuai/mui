---
order: 8
title:
  zh-CN: 幽灵按钮
  en-US: Ghost Button
---

## zh-CN

幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

## en-US

`ghost` property will make button's background transparent, it is commonly used in colored background.

```jsx
import { Button } from '@m-design/mui';

ReactDOM.render(
  <div className="site-button-ghost-wrapper">
    <h4>normal</h4>
    <Button type="primary" ghost>
      Primary
    </Button>
    <Button ghost>Default</Button>
    <Button type="dashed" ghost>
      Dashed
    </Button>
    <Button type="text" ghost>
      Text
    </Button>
    <Button type="link" ghost>
      Link
    </Button>
    <br />
    <br />
    <h4>danger</h4>
    <Button type="primary" ghost danger>
      Primary
    </Button>
    <Button ghost danger>
      Default
    </Button>
    <Button type="dashed" ghost danger>
      Dashed
    </Button>
    <Button type="text" ghost danger>
      Text
    </Button>
    <Button type="link" ghost danger>
      Link
    </Button>
    <br />
    <br />
    <h4>normal disabled</h4>
    <Button type="primary" ghost disabled>
      Primary
    </Button>
    <Button ghost disabled>
      Default
    </Button>
    <Button type="dashed" ghost disabled>
      Dashed
    </Button>
    <Button type="text" ghost disabled>
      Text
    </Button>
    <Button type="link" ghost disabled>
      Link
    </Button>
    <br />
    <br />
    <h4>danger disabled</h4>
    <Button type="primary" ghost danger disabled>
      Primary
    </Button>
    <Button ghost danger disabled>
      Default
    </Button>
    <Button type="dashed" ghost danger disabled>
      Dashed
    </Button>
    <Button type="text" ghost danger disabled>
      Text
    </Button>
    <Button type="link" ghost danger disabled>
      Link
    </Button>
    <br />
    <br />
  </div>,
  mountNode,
);
```

```css
.site-button-ghost-wrapper {
  padding: 26px 16px 16px;
  background: rgb(190, 200, 200);
}
```
