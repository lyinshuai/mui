---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

The simplest usage.

```tsx
import { Anchor } from '@m-design/mui';

const { Link } = Anchor;

ReactDOM.render(
  <div class="component-anchor-demo">
    <Anchor offsetTop={62}>
      <Link href="#components-anchor-demo-basic" title="Basic demo" />
      <Link href="#components-anchor-demo-static" title="Static demo" />
      <Link href="#API" title="API">
        <Link href="#Anchor-Props" title="Anchor Props" />
        <Link href="#Link-Props" title="Link Props" />
      </Link>
    </Anchor>
  </div>,
  mountNode,
);
```

```css
.component-anchor-demo .m-design-affix {
  z-index: 11;
}
```
