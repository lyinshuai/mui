---
order: 4
title:
  zh-CN: 省略号
  en-US: Ellipsis
---

## zh-CN

多行文本省略。你可以通过 `tooltip` 属性配置省略展示内容，大量文本时推荐优先使用 `expandable`。

## en-US

Multiple line ellipsis support. You can use `tooltip` to config ellipsis tooltip. Recommend `expandable` when have lots of content.

```tsx
import { Typography, Switch } from '@m-design/mui';

const { Paragraph, Text } = Typography;

const Demo = () => {
  const [ellipsis, setEllipsis] = React.useState(true);

  return (
    <>
      <Switch
        checked={ellipsis}
        onChange={() => {
          setEllipsis(!ellipsis);
        }}
      />

      <Paragraph ellipsis={ellipsis}>
        M Design mainly serves the experience design and technical implementation of Feishu Shennuo's middle and back-end products, and is jointly constructed and maintained by the UED team and the front-end team. M Design mainly serves the experience design and technical implementation of Feishu Shennuo's middle and back-end products, and is jointly constructed and maintained by the UED team and the front-end team. M Design mainly serves the experience design and technical implementation of Feishu Shennuo's middle and back-end products, and is jointly constructed and maintained by the UED team and the front-end team. M Design mainly serves the experience design and technical implementation of Feishu Shennuo's middle and back-end products, and is jointly constructed and maintained by the UED team and the front-end team.
      </Paragraph>

      <Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true } : false}>
       M Design mainly serves the experience design and technical implementation of Feishu Shennuo's middle and back-end products, and is jointly constructed and maintained by the UED team and the front-end team. M Design mainly serves the experience design and technical implementation of Feishu Shennuo's middle and back-end products, and is jointly constructed and maintained by the UED team and the front-end team. M Design mainly serves the experience design and technical implementation of Feishu Shennuo's middle and back-end products, and is jointly constructed and maintained by the UED team and the front-end team. M Design mainly serves the experience design and technical implementation of Feishu Shennuo's middle and back-end products, and is jointly constructed and maintained by the UED team and the front-end team.
      </Paragraph>

      <Text
        style={ellipsis ? { width: 100 } : undefined}
        ellipsis={ellipsis ? { tooltip: 'I am ellipsis now!' } : false}
      >
        M Design mainly serves the experience design and technical implementation of Feishu Shennuo's middle and back-end products, and is jointly constructed and maintained by the UED team and the front-end team.
      </Text>
    </>
  );
};

ReactDOM.render(<Demo />, CONTAINER);
```
