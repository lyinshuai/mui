---
order: 3
title:
  zh-CN: 可交互
  en-US: Interactive
---

## zh-CN

提供可编辑和可复制等额外的交互能力。

## en-US

Provide additional interactive capacity of editable and copyable.

```jsx
import React, { useState } from 'react';
import { Typography } from '@m-design/mui';
import { HighlightOutlined, SmileOutlined, SmileFilled } from '@ant-design/icons';

const { Paragraph } = Typography;

const Demo = () => {
  const [editableStr, setEditableStr] = useState('This is an editable text.');
  const [customIconStr, setCustomIconStr] = useState('Custom Edit icon and replace tooltip text.');
  const [hideTooltipStr, setHideTooltipStr] = useState('Hide Edit tooltip.');
  const [lengthLimitedStr, setLengthLimitedStr] = useState(
    'This is an editable text with limited length.',
  );
  const [popupStr, setPopupStr] = useState('This is an editable text with popup.');

  return (
    <>
      <Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph>
      <Paragraph
        editable={{
          icon: <HighlightOutlined />,
          tooltip: 'click to edit text',
          onChange: setCustomIconStr,
        }}
      >
        {customIconStr}
      </Paragraph>
      <Paragraph editable={{ tooltip: false, onChange: setHideTooltipStr }}>
        {hideTooltipStr}
      </Paragraph>
      <Paragraph
        editable={{
          onChange: setLengthLimitedStr,
          maxLength: 50,
          autoSize: { maxRows: 5, minRows: 3 },
        }}
      >
        {lengthLimitedStr}
      </Paragraph>
      <Paragraph
        editable={{
          onChange: setPopupStr,
          mode: 'popup',
          maxLength: 100,
          onStart: (...args) => {
            console.log('onStart', popupStr)
          },
          onEnd: (...args) => {
            console.log('onEnd', popupStr)
          },
          onCancel: (...args) => {
            console.log('onCancel', popupStr)
          },
        }}
      >
        {popupStr}
      </Paragraph>
      <Paragraph copyable>This is a copyable text.</Paragraph>
      <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
      <Paragraph
        copyable={{
          icon: [<SmileOutlined key="copy-icon" />, <SmileFilled key="copied-icon" />],
          tooltips: ['click here', 'you clicked!!'],
        }}
      >
        Custom Copy icon and replace tooltips text.
      </Paragraph>
      <Paragraph copyable={{ tooltips: false }}>Hide Copy tooltips.</Paragraph>
    </>
  );
};

ReactDOM.render(<Demo />, CONTAINER);
```
