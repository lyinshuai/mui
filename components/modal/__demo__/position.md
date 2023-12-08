---
order: 7
title:
  zh-CN: 自定义位置
  en-US: To customize the position of modal
---

## zh-CN

使用 `centered` 或类似 `style.top` 的样式来设置对话框位置。

## en-US

You can use `centered`,`style.top` or other styles to set position of modal dialog.

```jsx
import { Modal, Button } from '@m-design/mui';

class App extends React.Component {
  state = {
    modal1Visible: false,
    modal2Visible: false,
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  render() {
    return (
      <>
        <Button type="primary" onClick={() => this.setModal1Visible(true)}>
          Display a modal dialog at 50px to Top
        </Button>
        <Modal
          title="我是主要信息，我是主要"
          centered={false}
          style={{ top: 50 }}
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
        >
          <p>我是文案限制长度，我是文案限制长度，我是文案限制长度，我是</p>
        </Modal>
        <br />
        <br />
        <Button type="primary" onClick={() => this.setModal2Visible(true)}>
          Vertically centered modal dialog
        </Button>
        <Modal
          title="我是主要信息，我是主要"
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
          <p>我是文案限制长度，我是文案限制长度，我是文案限制长度，我是</p>
        </Modal>
      </>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
