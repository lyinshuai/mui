---
order: 6
title:
  zh-CN: 位置
  en-US: Position
---

## zh-CN

有四个位置，`tabPosition="left|right|top|bottom"`。在移动端下，`left|right` 会自动切换成 `top`。

## en-US

Tab's position: left, right, top or bottom. Will auto switch to `top` in mobile.

```jsx
import { Tabs, Radio, Space, Typography, Button } from '@m-design/mui';

const { TabPane } = Tabs;

const initialPanes = [
  { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
  { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
  { title: 'Tab 3', content: 'Content of Tab Pane 3', key: '3', disabled: true },
  { title: 'Tab 4', content: 'Content of Tab Pane 4', key: '4' },
  { title: 'Tab 5', content: 'Content of Tab Pane 5', key: '5' },
];

class Demo extends React.Component {
  newTabIndex = initialPanes.length;

  state = {
    tabPosition: 'top',
    tabType: 'line',
    tabGutter: undefined,
    tabSize: 'default',
    tabScrollType: 'arrow',
    activeKey: initialPanes[0].key,
    panes: initialPanes,
  };

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = (num = 1) => {
    const { panes } = this.state;
    const newPanes = [...panes];
    let activeKey = '';
    while (!!num) {
      activeKey = `newTab${this.newTabIndex++}`;
      num--;
      newPanes.push({
        title: `Tab ${this.newTabIndex}`,
        content: `Content of new Tab ${this.newTabIndex}`,
        key: activeKey,
      });
    }
    this.setState({
      panes: newPanes,
      activeKey,
    });
  };

  remove = targetKey => {
    const { panes, activeKey } = this.state;
    let newActiveKey = activeKey;
    let lastIndex;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = panes.filter(pane => pane.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    this.setState({
      panes: newPanes,
      activeKey: newActiveKey,
    });
  };

  changeTabPosition = e => {
    this.setState({ tabPosition: e.target.value });
  };

  changeTabType = e => {
    this.setState({ tabType: e.target.value });
  };

  changeTabGutter = e => {
    this.setState({ tabGutter: e.target.value });
  };

  changeTabSize = e => {
    this.setState({ tabSize: e.target.value });
  };

  batchAddTabs = e => {
    this.add(10);
  };

  batchSubTabs = e => {
    this.setState({
      panes: [...initialPanes],
      activeKey: initialPanes[initialPanes.length - 1].key,
    });
    this.newTabIndex = initialPanes.length
  };

  changeTabScrollType = e => {
    this.setState({ tabScrollType: e.target.value });
  }

  render() {
    const { tabPosition, tabType, tabGutter, tabSize, tabScrollType, panes, activeKey } = this.state;

    return (
      <>
        <Space style={{ marginBottom: 24 }}>
          Tab position:
          <Radio.Group value={tabPosition} onChange={this.changeTabPosition}>
            <Radio.Button value="top">top</Radio.Button>
            <Radio.Button value="bottom">bottom</Radio.Button>
            <Radio.Button value="left">left</Radio.Button>
            <Radio.Button value="right">right</Radio.Button>
          </Radio.Group>
        </Space>
        <br />
        <Space style={{ marginBottom: 24 }}>
          Tab type:
          <Radio.Group value={tabType} onChange={this.changeTabType}>
            <Radio.Button value="line">line</Radio.Button>
            <Radio.Button value="text">text</Radio.Button>
            <Radio.Button value="fill">fill</Radio.Button>
            <Radio.Button value="card">card</Radio.Button>
            <Radio.Button value="card-gutter">card-gutter</Radio.Button>
            <Radio.Button value="editable-card">editable-card</Radio.Button>
            <Radio.Button value="card-large">card-large</Radio.Button>
          </Radio.Group>
        </Space>
        <br />
        <Space style={{ marginBottom: 24 }}>
          Tab gutter:
          <Radio.Group value={tabGutter} onChange={this.changeTabGutter}>
            <Radio.Button value={undefined}>default</Radio.Button>
            <Radio.Button value={0}>0</Radio.Button>
            <Radio.Button value={10}>10</Radio.Button>
            <Radio.Button value={20}>20</Radio.Button>
          </Radio.Group>
        </Space>
        <br />
        <Space style={{ marginBottom: 24 }}>
          Tab gutter:
          <Radio.Group value={tabSize} onChange={this.changeTabSize}>
            <Radio.Button value={'small'}>small</Radio.Button>
            <Radio.Button value={'default'}>default</Radio.Button>
            <Radio.Button value={'large'}>large</Radio.Button>
          </Radio.Group>
        </Space>
        <br />
        <Space style={{ marginBottom: 24 }}>
          Tab scroll:
          <Button onClick={this.batchSubTabs} type="text" size="small">reset</Button>
          <Button onClick={this.batchAddTabs} type="text" size="small">add 10 tab</Button>
        </Space>
        <br />
        <Space style={{ marginBottom: 24 }}>
          Tab scroll type:
          <Radio.Group value={tabScrollType} onChange={this.changeTabScrollType}>
            <Radio.Button value={'arrow'}>arrow</Radio.Button>
            <Radio.Button value={'collapse'}>collapse</Radio.Button>
          </Radio.Group>
        </Space>
        <Tabs
          tabPosition={tabPosition}
          type={tabType}
          onChange={this.onChange}
          activeKey={activeKey}
          onEdit={this.onEdit}
          tabBarGutter={tabGutter}
          size={tabSize}
          scrollType={tabScrollType}
          style={{
            padding: '10px',
            height: '350px',
            backgroundColor: tabType === 'card-large' ? '#f8f8f8' : '#fff',
          }}
        >
          {panes.map(pane => (
            <TabPane
              tab={pane.title}
              key={pane.key}
              closable={pane.closable}
              disabled={pane.disabled}
            >
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <Typography>{pane.content}</Typography>
              </div>
            </TabPane>
          ))}
        </Tabs>
      </>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
