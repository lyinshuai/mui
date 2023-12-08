---
order: 9
title:
  zh-CN: 分段进度条
  en-US: Progress bar with success segment
---

## zh-CN

标准的进度条。`type="line" steps={n}` 时不支持分段颜色。

## en-US

A standard progress bar. Doesn't support trail color when `type="line" steps={n}`.

```jsx
import { Tooltip, Progress, Button } from '@m-design/mui';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

class App extends React.Component {
  state = {
    percent: 60,
    successPercent: 40,
  };

  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  };

  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  };

  successDecline = () => {
    let percent = this.state.successPercent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ successPercent: percent });
  };

  successIncrease = () => {
    let percent = this.state.successPercent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ successPercent: percent });
  };

  render() {
    return (
      <>
        percent：
        <Button.Group>
          <Button onClick={this.decline} icon={<MinusOutlined />} />
          <Button onClick={this.increase} icon={<PlusOutlined />} />
        </Button.Group>
        <br />
        <br />
        success percent：
        <Button.Group>
          <Button onClick={this.successDecline} icon={<MinusOutlined />} />
          <Button onClick={this.successIncrease} icon={<PlusOutlined />} />
        </Button.Group>
        <br />
        <br />
        <Progress percent={this.state.percent} success={{ percent: this.state.successPercent }} />
        <Progress percent={this.state.percent} success={{ percent: this.state.successPercent }} status="paused"/>
        <br />
        <br />
        <Progress
          percent={this.state.percent}
          success={{ percent: this.state.successPercent }}
          type="circle"
        />
        <Progress
          percent={this.state.percent}
          success={{ percent: this.state.successPercent }}
          status="paused"
          type="circle"
        />
        <br />
        <br />
        <Progress
          percent={this.state.percent}
          success={{ percent: this.state.successPercent }}
          type="dashboard"
        />
        <Progress
          percent={this.state.percent}
          success={{ percent: this.state.successPercent }}
          status="paused"
          type="dashboard"
        />
      </>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
