---
order: 6
title:
  zh-CN: 竖排列表样式
  en-US: Vertical
---

## zh-CN

通过设置 `itemLayout` 属性为 `vertical` 可实现竖排列表样式。通过设置 `extraLocation` 属性为 `before`， 可实现竖排模式时 `extra` 在左侧，非竖排模式时 `extra` 在顶部。通过设置 `extraLocation` 属性为 `after`， 可实现竖排模式时 `extra` 在右侧，非竖排模式时 `extra` 在底部部。 `extraLocation` 默认为 `after`

## en-US

Set the `itemLayout` property to `vertical` to create a vertical list.

```jsx
import { useState } from 'react';
import { List, Avatar, Space, Radio } from '@m-design/mui';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: '#',
    title: `M Design part ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
      'M Design, a design language for background applications, is refined by Meetsocial UED Team and the front-end team.',
    content:
      "M Design mainly serves the experience design and technical implementation of Feishu Shennuo's middle and back-end products, and is jointly constructed and maintained by the UED team and the front-end team.",
  });
}

const IconText = ({ icon, text }) => (
  <Space size={5}>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Demo = () => {
  const [extraLocation, setExtraLocation] = useState('after');
  const onChange = e => {
    setExtraLocation(e.target.value);
  };
  return (
    <div>
      extraLocation：
      <Radio.Group value={extraLocation} onChange={onChange} style={{ marginBottom: 16 }}>
        <Radio.Button value="before">before</Radio.Button>
        <Radio.Button value="after">after</Radio.Button>
      </Radio.Group>
      <List
        itemLayout="vertical"
        splitShrink
        size="large"
        extraLocation={extraLocation}
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={listData}
        footer={
          <div>
            <b>M Design</b> footer part
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar size={48} src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```
