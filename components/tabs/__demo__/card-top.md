---
order: 10
title:
  zh-CN: 卡片式页签容器
  en-US: Container of card type Tab
---

## zh-CN

用于容器顶部，需要一点额外的样式覆盖。

## en-US

Should be used at the top of container, needs to override styles.

```jsx
import { Tabs } from '@m-design/mui';

const { TabPane } = Tabs;

ReactDOM.render(
  <div id="components-tabs-demo-card-top">
    <Tabs type="card-large">
      <TabPane tab="Tab Title 1" key="1">
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
      </TabPane>
      <TabPane tab="Tab Title 2" key="2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </TabPane>
      <TabPane tab="Tab Title 3" key="3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </TabPane>
    </Tabs>
  </div>,
  mountNode,
);
```

```css
#components-tabs-demo-card-top{
  padding: 24px;
  overflow: hidden;
  background: #f5f5f5;
}
```
