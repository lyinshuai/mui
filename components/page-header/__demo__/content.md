---
order: 4
title:
  zh-CN: 组合示例
  en-US: Complete example
---

## zh-CN

使用了 PageHeader 提供的所有能力。

## en-US

Show all props provided by PageHeader.

```jsx
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from '@m-design/mui';
import { EllipsisOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const DropdownMenu = () => (
  <Dropdown key="more" overlay={menu}>
    <Button
      style={{
        border: 'none',
        padding: 0,
        marginLeft: 4,
      }}
    >
      <EllipsisOutlined
        style={{
          fontSize: 24,
          transform: 'rotate(90deg)',
          verticalAlign: 'top',
        }}
      />
    </Button>
  </Dropdown>
);

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

const IconLink = ({ src, text }) => (
  <a className="example-link">
    <img className="example-link-icon" src={src} alt={text} />
    {text}
  </a>
);

const content = (
  <>
    <Paragraph>
      M Design is an enterprise-level product design system aimed at improving design and
      development efficiency. It defines a set of middle and back-end design and front-end basic
      components to help us create a more consistent user experience more easily.
    </Paragraph>
    <div>
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
        text="Quick Start"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
        text=" Product Info"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
        text="Product Doc"
      />
    </div>
  </>
);

const Content = ({ children, extraContent }) => (
  <Row>
    <div style={{ flex: 1 }}>{children}</div>
    <div className="image">{extraContent}</div>
  </Row>
);

ReactDOM.render(
  <div id="components-page-header-demo-content">
    <PageHeader
      title="Title"
      className="site-page-header"
      onBack={() => null}
      subTitle="This is a subtitle"
      tags={<Tag color="blue">Running</Tag>}
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>,
        <DropdownMenu key="more" />,
      ]}
      avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
      breadcrumb={{ routes }}
    >
      <Content
        extraContent={
          <img
            src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
            alt="content"
            width="100%"
          />
        }
      >
        {content}
      </Content>
    </PageHeader>
  </div>,
  mountNode,
);
```

```css
#components-page-header-demo-content .image {
  display: flex;
  align-items: center;
  margin: 0 0 0 60px;
}

#components-page-header-demo-content .m-design-page-header-rtl .image {
  margin: 0 60px 0 0;
}

#components-page-header-demo-content .example-link {
  margin-right: 16px;
  line-height: 24px;
}
[data-theme='compact'] #components-page-header-demo-content .example-link {
  line-height: 20px;
}
#components-page-header-demo-content .example-link-icon {
  margin-right: 8px;
}

[data-theme='compact'] #components-page-header-demo-content .example-link-icon {
  width: 20px;
  height: 20px;
}

#components-page-header-demo-content .m-design-page-header-rtl .example-link {
  float: right;
  margin-right: 0;
  margin-left: 16px;
}
#components-page-header-demo-content .m-design-page-header-rtl .example-link-icon {
  margin-right: 0;
  margin-left: 8px;
}

@media (max-width: 768px) {
  #components-page-header-demo-content .image {
    flex: 100%;
    margin: 24px 0 0;
  }
}
```
