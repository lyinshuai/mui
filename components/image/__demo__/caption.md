---
order: 9
title:
  zh-CN: 图片信息
  en-US: Image caption
---

## zh-CN

通过设置 title 和 description 可以将图片的标题和描述显示在图片内部或者底部，显示的位置通过 footerPosition 控制。

## en-US

By setting title and Description, you can display the title and description of an image inside or at the bottom of the image. The display position is controlled by footerPosition.

```jsx
import React from 'react';
import { Image, Space } from '@m-design/mui';
import { EyeOutlined, DownloadOutlined, InfoCircleOutlined } from '@ant-design/icons';

function ImageDemo(props) {
  const [visible, setVisible] = React.useState(false);
  return (
    <Image
      width={280}
      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
      title="image title"
      description="image description"
      actions={[
        <span
          key="1"
          onClick={e => {
            setVisible(true);
          }}
        >
          <EyeOutlined />
        </span>,
        <span
          key="2"
          onClick={e => {
            console.log('download');
          }}
        >
          <DownloadOutlined />
        </span>,
        <span key="3">
          <InfoCircleOutlined />
        </span>,
      ]}
      preview={{
        visible,
        onVisibleChange: e => {
          setVisible(false);
        },
        mask: false,
      }}
      {...props}
    />
  );
}

ReactDOM.render(
  <>
    <Space>
      <ImageDemo />
      <ImageDemo actionsCollapse />
    </Space>
    <br />
    <br />
    <Space>
      <ImageDemo footerPosition="outer" />
      <ImageDemo footerPosition="outer" actionsCollapse />
    </Space>
  </>,
  mountNode,
);
```
