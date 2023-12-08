---
order: 3
title:
  zh-CN: 表单布局
  en-US: Form Layout
---

## zh-CN

表单有三种布局。

## en-US

There are three layout for form: `horizontal`, `vertical`, `inline`.

```tsx
import React, { useState } from 'react';
import { Form, Input, Button, Radio } from '@m-design/mui';
import { InfoCircleOutlined } from '@ant-design/icons';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const FormLayoutDemo = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');
  const [formLabelCol, setFormLabelCol] = useState<number>(8);
  const [formLabelAlign, setFormLabelAlign] = useState<'left' | 'right'>('right');

  const onFormLayoutChange = ({
    layout,
    labelCol,
    labelAlign,
  }: {
    layout: LayoutType;
    labelCol: number;
    labelAlign: string;
  }) => {
    if (layout) {
      setFormLayout(layout);
    }
    if (labelCol) {
      setFormLabelCol(labelCol);
    }
    if (labelAlign) {
      setFormLabelAlign(labelAlign);
    }
  };

  return (
    <Form
      labelCol={{ span: formLabelCol }}
      layout={formLayout}
      labelAlign={formLabelAlign}
      wrapperCol={formLayout === 'horizontal' ? { span: 16 } : {}}
      form={form}
      initialValues={{ layout: formLayout, labelCol: formLabelCol, labelAlign: formLabelAlign }}
      onValuesChange={onFormLayoutChange}
    >
      <Form.Item
        label="Layout"
        name="layout"
        rules={[{ required: true, message: 'Please select your layout!' }]}
        tooltip={{
          title: 'Tooltip with customize icon',
          icon: <InfoCircleOutlined />,
        }}
      >
        <Radio.Group>
          <Radio.Button value="horizontal">Horizontal</Radio.Button>
          <Radio.Button value="vertical">Vertical</Radio.Button>
          <Radio.Button value="inline">Inline</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="LabelCol" name="labelCol">
        <Radio.Group>
          <Radio.Button value={4}>4</Radio.Button>
          <Radio.Button value={6}>6</Radio.Button>
          <Radio.Button value={8}>8</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="LabelAlign" name="labelAlign">
        <Radio.Group>
          <Radio.Button value="left">left</Radio.Button>
          <Radio.Button value="right">right</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Field A">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item wrapperCol={formLayout === 'horizontal' ? { span: 16, offset: 4 } : {}}>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};

ReactDOM.render(<FormLayoutDemo />, mountNode);
```
