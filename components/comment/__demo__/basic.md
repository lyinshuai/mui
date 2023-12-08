---
order: 0
title:
  zh-CN: 基本评论
  en-US: Basic comment
---

## zh-CN

一个基本的评论组件，带有作者、头像、时间和操作。

## en-US

A basic comment with author, avatar, time and actions.

```jsx
import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar } from '@m-design/mui';
import moment from 'moment';
import {
  IconHeart as HeartOutlined,
  IconHeartFill as HeartFilled,
  IconStar as StarOutlined,
  IconStarFill as StarFilled,
  IconMessage as MessageOutlined,
} from '@arco-design/web-react/icon';

const Demo = () => {
  const [likes, setLikes] = useState(3);
  const [collects, setCollects] = useState(1);
  const [liked, setliked] = useState(false);
  const [collected, setCollected] = useState(false);

  const like = () => {
    const nextStatus = !liked;
    setLikes(prev => {
      let num = prev + (nextStatus ? 1 : -1);
      num = num <= 0 ? 0 : num;
      return num;
    });
    setliked(nextStatus);
  };

  const collect = () => {
    const nextStatus = !collected;
    setCollects(prev => {
      let num = prev + (nextStatus ? 1 : -1);
      num = num <= 0 ? 0 : num;
      return num;
    });
    setCollected(nextStatus);
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {liked ? <HeartFilled style={{ color: '#F53F3F' }} /> : <HeartOutlined />}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-collect" title="Collect">
      <span onClick={collect}>
        {collected ? <StarFilled style={{ color: '#FFB400' }} /> : <StarOutlined />}
        <span className="comment-action">{collects}</span>
      </span>
    </Tooltip>,
    <>
      <span>
        <MessageOutlined />
      </span>
      <span key="comment-basic-reply-to">Reply</span>
    </>,
  ];

  return (
    <Comment
      actions={actions}
      author={<a>Han Solo</a>}
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
      content={
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

ReactDOM.render(<Demo />, mountNode);
```

```css
/* tile uploaded pictures */
.comment-action {
  padding-left: 5px;
  cursor: auto;
}

[class*='-col-rtl'] .comment-action {
  padding-right: 5px;
  padding-left: 0;
}
```
