---
order: 7
title:
  zh-CN: 预设状态的标签
  en-US: Status Tag
---

## zh-CN

预设五种状态颜色，可以通过设置 `color` 为 `success`、 `processing`、`error`、`default`、`warning` 来代表不同的状态。

## en-US

We preset five different colors, you can set color property such as `success`,`processing`,`error`,`default` and `warning` to indicate specific status.

```jsx
import { Tag, Divider } from '@m-design/mui';
import {
  ClockCircleFilled,
  MinusCircleFilled,
} from '@ant-design/icons';
import ExclamationCircleFilled from '../../_assets/ExclamationCircleFilled';
import CheckCircleFilled from '../../_assets/CheckCircleFilled'
import CloseCircleFilled from '../../_assets/CloseCircleFilled'
import LoadingIcon from '../../_assets/Loading'

ReactDOM.render(
  <>
    <Divider orientation="left">Without icon</Divider>
    <div>
      <Tag color="success">success</Tag>
      <Tag color="processing">processing</Tag>
      <Tag color="error">error</Tag>
      <Tag color="warning">warning</Tag>
      <Tag color="default">default</Tag>
    </div>
    <Divider orientation="left">With icon</Divider>
    <div>
      <Tag icon={<CheckCircleFilled />} color="success">
        success
      </Tag>
      <Tag icon={<LoadingIcon />} color="processing">
        processing
      </Tag>
      <Tag icon={<CloseCircleFilled />} color="error">
        error
      </Tag>
      <Tag icon={<ExclamationCircleFilled />} color="warning">
        warning
      </Tag>
      <Tag icon={<ClockCircleFilled />} color="default">
        waiting
      </Tag>
      <Tag icon={<MinusCircleFilled />} color="default">
        stop
      </Tag>
    </div>
  </>,
  mountNode,
);
```
