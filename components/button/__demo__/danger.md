---
order: 9
title:
  zh-CN: 危险按钮
  en-US: Danger Buttons
---


```jsx
import { Button } from '@m-design/mui';

ReactDOM.render(
  <div className="component-button-demo">
    <Button type="primary" danger>
      Primary
    </Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>
      Dashed
    </Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="link" danger>
      Link
    </Button>
  </div>,
  CONTAINER,
);
```
