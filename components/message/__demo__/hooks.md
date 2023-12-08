---
order: 10
title:
  zh-CN: 通过 Hooks 获取上下文（4.5.0+）
  en-US: Get context with hooks (4.5.0+)
---

## zh-CN

通过 `Message.useMessage` 创建支持读取 context 的 `contextHolder`。

## en-US

Use `Message.useMessage` to get `contextHolder` with context accessible issue.

```jsx
import { Message, Button } from '@m-design/mui';

const Context = React.createContext({ name: 'Default' });

function Demo() {
  const [messageApi, contextHolder] = Message.useMessage();
  const info = () => {
    messageApi.open({
      type: 'info',
      content: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      duration: 1,
    });
  };

  return (
    <Context.Provider value={{ name: 'Ant Design' }}>
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal Message
      </Button>
    </Context.Provider>
  );
}

ReactDOM.render(<Demo />, mountNode);
```
