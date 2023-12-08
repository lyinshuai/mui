---
order: 0
title:
  zh-CN: 顶部导航
  en-US: Top Navigation
---

## zh-CN

水平的顶部导航菜单。

## en-US

Horizontal top navigation menu.

```jsx
import { Menu } from '@m-design/mui';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <div className="site-wrapper">
        <div className="site-menu-box">
          <div
            style={{
              width: 80,
              height: 30,
              margin: '14px 20px',
              background: '#E5E6EB',
              borderRadius: '4px',
            }}
          />
          <Menu
            onClick={this.handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            style={{ flexGrow: 1 }}
          >
            <Menu.Item key="mail" icon={<MailOutlined />}>
              <span><a>Hom</a></span>e
            </Menu.Item>
            <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
              Navigation
            </Menu.Item>
            <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Submenu">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </SubMenu>
          </Menu>
          <div
            style={{
              margin: '14px 20px',
              padding: '0 20px',
              color: '#4e5969',
              lineHeight: '30px',
              background: '#f2f3f5',
              borderRadius: '4px',
            }}
          >
            自定义内容
          </div>
        </div>
        <br />
        <br />
        <div className="site-menu-box-dark">
          <div
            style={{
              width: 80,
              height: 30,
              margin: '14px 20px',
              background: '#C9CDD4',
              borderRadius: '4px',
            }}
          />
          <Menu
            onClick={this.handleClick}
            selectedKeys={[current]}
            theme="dark"
            mode="horizontal"
            style={{ flexGrow: 1 }}
          >
            <Menu.Item key="mail" icon={<MailOutlined />}>
              <span><a>Hom</a></span>e
            </Menu.Item>
            <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
              Navigation
            </Menu.Item>
            <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Submenu">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </SubMenu>
          </Menu>
          <div
            style={{
              margin: '14px 20px',
              padding: '0 20px',
              color: '#C9CDD4',
              lineHeight: '30px',
              background: '#252931',
              borderRadius: '4px',
            }}
          >
            自定义内容
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

```css
.site-wrapper {
  width: 100%;
  padding: 40px;
  background: #f2f3f5;
}

.site-menu-box {
  display: flex;
  background: #fff;
  border-bottom: 1px solid #e5e6e8;
}

.site-menu-box-dark {
  display: flex;
  background: #1d2129;
  border-bottom: 1px solid #1d2129;
}
```
