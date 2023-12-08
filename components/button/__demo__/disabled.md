---
order: 3
title:
  zh-CN: 不可用状态
  en-US: Disabled
---

## zh-CN

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

## en-US

To mark a button as disabled, add the `disabled` property to the `Button`.

```jsx
import { Button } from '@m-design/mui';

ReactDOM.render(
  <>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>
      Primary(disabled)
    </Button>
    <br />
    <br />
    <Button>Default</Button>
    <Button disabled>Default(disabled)</Button>
    <br />
    <br />
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>
      Dashed(disabled)
    </Button>
    <br />
    <br />
    <Button type="text">Text</Button>
    <Button type="text" disabled>
      Text(disabled)
    </Button>
    <br />
    <br />
    <Button type="link">Link</Button>
    <Button type="link" disabled>
      Link(disabled)
    </Button>
    <br />
    <br />
    <Button type="primary" danger>
      Danger
    </Button>
    <Button type="primary" danger disabled>
      primary(disabled)
    </Button>
    <br />
    <br />
    <Button danger>Danger Default</Button>
    <Button danger disabled>
      Default(disabled)
    </Button>
    <br />
    <br />
    <Button danger type="text">
      Danger Text
    </Button>
    <Button danger type="text" disabled>
      Text(disabled)
    </Button>
    <br />
    <br />
    <Button type="link" danger>
      Danger Link
    </Button>
    <Button type="link" danger disabled>
      Link(disabled)
    </Button>
    <br />
    <br />
    <div className="site-button-ghost-wrapper">
      <Button ghost>Ghost</Button>
      <Button ghost disabled>
        Ghost(disabled)
      </Button>
      <br />
      <br />
      <Button ghost danger>
        Danger Ghost
      </Button>
      <Button ghost disabled danger>
        Danger Ghost(disabled)
      </Button>
    </div>
  </>,
  mountNode,
);
```