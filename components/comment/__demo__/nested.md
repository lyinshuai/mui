---
order: 2
title:
  zh-CN: 嵌套评论
  en-US: Nested comments
---

## zh-CN

评论可以嵌套。

## en-US

Comments can be nested.

```jsx
import { useState, useMemo, useCallback } from 'react';
import { Comment, Avatar, Input, Form, Button } from '@m-design/mui';

const { TextArea } = Input;

const testData = [
  {
    author: 'Han Solo 1',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).',
    children: [
      {
        author: 'Han Solo 1-1',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).',
        children: [
          {
            author: 'Han Solo 1-1-1',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).',
            children: [],
          },
          {
            author: 'Han Solo 1-1-2',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).',
            children: [],
          },
        ],
      },
      {
        author: 'Han Solo 1-2',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).',
      },
    ],
  },
  {
    author: 'Han Solo 2',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).',
  },
];

const maxLevel = 3;

const Editor = ({
  onChange,
  onSubmit,
  submitting,
  onCancel,
  value,
  showReply,
  level,
  currentLevel,
  replyKey,
  currentReplyKey,
}) => {
  return (
    showReply &&
    level === currentLevel &&
    replyKey === currentReplyKey && (
      <Comment
        align={{ actions: 'right' }}
        actions={[
          <Button key="cancel" onClick={onCancel} size="small">
            Cancel
          </Button>,
          <Button
            key="submit"
            htmlType="submit"
            loading={submitting}
            onClick={onSubmit}
            type="primary"
            size="small"
          >
            Submit
          </Button>,
        ]}
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
        content={<TextArea rows={4} onChange={onChange} value={value} />}
      />
    )
  );
};

const ExampleComment = ({ children, item, actions }) => {
  return (
    <Comment
      align={{ actions: 'right' }}
      actions={actions}
      author={item.author}
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
      content={item.content}
    >
      {children}
    </Comment>
  );
};

const CommentListRender = ({ data, level = 1, lastReplyKey, ...rest }) => {
  const {
    toggleReply,
    onCancel,
    onChange,
    onSubmit,
    submitting,
    showReply,
    value,
    setValue,
    currentLevel,
    setCurrentLevel,
    currentReplyKey,
    setCurrentReplyKey,
  } = rest;

  return (
    <>
      {data.map((item, index) => {
        let replyKey = index + 1;
        if (lastReplyKey) {
          replyKey = lastReplyKey + '-' + replyKey;
        }
        return (
          <ExampleComment
            item={item}
            key={replyKey}
            actions={[
              <span
                key="comment-nested-reply-to"
                onClick={() => {
                  if (!showReply) {
                    toggleReply();
                  } else {
                    if (replyKey === currentReplyKey) {
                      toggleReply();
                    }
                  }
                  setCurrentLevel(level);
                  setCurrentReplyKey(replyKey);
                  setValue(`reply ${item.author}：`);
                }}
              >
                Reply
              </span>,
            ]}
          >
            {level <= maxLevel && (
              <CommentListRender
                {...rest}
                data={item.children || []}
                level={level + 1}
                lastReplyKey={replyKey}
              />
            )}
            {level <= maxLevel && (
              <Editor
                {...{
                  onChange,
                  onSubmit,
                  submitting,
                  onCancel,
                  value,
                  showReply,
                  level,
                  currentLevel,
                  replyKey,
                  currentReplyKey,
                }}
              />
            )}
          </ExampleComment>
        );
      })}
    </>
  );
};

const CommentList = () => {
  const [value, setValue] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [currentReplyKey, setCurrentReplyKey] = useState(1);
  const [currentLevel, setCurrentLevel] = useState(1);

  const toggleReply = useCallback(() => {
    setShowReply(status => !status);
  }, []);

  const onCancel = useCallback(() => {
    setShowReply(false);
  }, []);

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(e => {
    setSubmitting(true);
    setTimeout(setSubmitting, 1000, false);
  }, []);

  return (
    <CommentListRender
      data={testData}
      {...{
        toggleReply,
        onCancel,
        onChange,
        onSubmit,
        submitting,
        showReply,
        value,
        setValue,
        currentLevel,
        setCurrentLevel,
        currentReplyKey,
        setCurrentReplyKey,
      }}
    />
  );
};

ReactDOM.render(<CommentList />, mountNode);
```
