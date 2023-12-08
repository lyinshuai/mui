---
order: 1
title:
  zh-CN: 不可用
  en-US: disabled
---

## zh-CN

Radio 不可用。

## en-US

Radio unavailable.

```jsx
import { Radio, Button } from '@m-design/mui';

class App extends React.Component {
  state = {
    disabled: true,
  };

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <>
        <Radio defaultChecked={false} disabled={this.state.disabled}>
          Disabled
        </Radio>
        <Radio defaultChecked disabled={this.state.disabled}>
          Disabled
        </Radio>
        <br />
        <Radio.Group defaultValue="a" disabled={this.state.disabled} style={{ marginTop: 16 }}>
          <Radio.Button value="a">Hangzhou</Radio.Button>
          <Radio.Button value="b">Shanghai</Radio.Button>
          <Radio.Button value="c">Beijing</Radio.Button>
          <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
        <Radio.Group
          defaultValue="b"
          disabled={this.state.disabled}
          buttonStyle="solid"
          style={{ marginTop: 16 }}
        >
          <Radio.Button value="a">Hangzhou</Radio.Button>
          <Radio.Button value="b">Shanghai</Radio.Button>
          <Radio.Button value="c">Beijing</Radio.Button>
          <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
        <Radio.Group
          defaultValue="c"
          disabled={this.state.disabled}
          buttonStyle="outline"
          style={{ marginTop: 16 }}
        >
          <Radio.Button value="a">Hangzhou</Radio.Button>
          <Radio.Button value="b">Shanghai</Radio.Button>
          <Radio.Button value="c">Beijing</Radio.Button>
          <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
        <br />
        <Button type="primary" onClick={this.toggleDisabled} style={{ marginTop: 16 }}>
          Toggle disabled
        </Button>
      </>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
