import * as React from 'react';
import classNames from 'classnames';
import { ListGridType, ListContext } from './index';
import { Col } from '../grid';
import { ConfigContext } from '../config-provider';
import { cloneElement } from '../_util/reactNode';

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  prefixCls?: string;
  style?: React.CSSProperties;
  extra?: React.ReactNode;
  actions?: React.ReactNode[];
  grid?: ListGridType;
  colStyle?: React.CSSProperties;
}

export interface ListItemMetaProps {
  avatar?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  description?: React.ReactNode;
  prefixCls?: string;
  style?: React.CSSProperties;
  title?: React.ReactNode;
}

export const Meta: React.FC<ListItemMetaProps> = ({
  prefixCls: customizePrefixCls,
  className,
  avatar,
  title,
  description,
  ...others
}) => {
  const { getPrefixCls } = React.useContext(ConfigContext);

  const prefixCls = getPrefixCls('list', customizePrefixCls);
  const classString = classNames(`${prefixCls}-item-meta`, className);

  const content = (
    <div className={`${prefixCls}-item-meta-content`}>
      {title && <div className={`${prefixCls}-item-meta-title`}>{title}</div>}
      {description && <div className={`${prefixCls}-item-meta-description`}>{description}</div>}
    </div>
  );

  return (
    <div {...others} className={classString}>
      {avatar && <div className={`${prefixCls}-item-meta-avatar`}>{avatar}</div>}
      {(title || description) && content}
    </div>
  );
};

export interface ListItemTypeProps extends React.FC<ListItemProps> {
  Meta: typeof Meta;
}

const Item: ListItemTypeProps = ({
  prefixCls: customizePrefixCls,
  children,
  actions,
  extra,
  className,
  colStyle,
  ...others
}) => {
  const { grid, itemLayout, extraLocation } = React.useContext(ListContext);
  const { getPrefixCls } = React.useContext(ConfigContext);

  const isItemContainsTextNodeAndNotSingular = () => {
    let result;
    React.Children.forEach(children, (element: React.ReactElement<any>) => {
      if (typeof element === 'string') {
        result = true;
      }
    });
    return result && React.Children.count(children) > 1;
  };

  const isFlexMode = () => {
    if (itemLayout === 'vertical') {
      return !!extra;
    }
    return !isItemContainsTextNodeAndNotSingular();
  };

  const prefixCls = getPrefixCls('list', customizePrefixCls);
  const actionsContent = actions && actions.length > 0 && (
    <ul className={`${prefixCls}-item-action`} key="actions">
      {actions.map((action: React.ReactNode, i: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={`${prefixCls}-item-action-${i}`}>
          {action}
          {i !== actions.length - 1 && <em className={`${prefixCls}-item-action-split`} />}
        </li>
      ))}
    </ul>
  );
  const Element = grid ? 'div' : 'li';
  const isItemLayout = itemLayout === 'vertical' && extra;
  const itemChildrenContent = isItemLayout
    ? [
        <div className={`${prefixCls}-item-main`} key="content">
          {children}
          {actionsContent}
        </div>,
      ]
    : [children, actionsContent];

  const extraElement = isItemLayout ? (
    <div
      className={classNames(`${prefixCls}-item-extra`, `${prefixCls}-item-extra-${extraLocation}`)}
      key="extra"
    >
      {extra}
    </div>
  ) : (
    cloneElement(extra, { key: 'extra' })
  );

  if (extraLocation === 'after') {
    itemChildrenContent.push(extraElement);
  } else {
    itemChildrenContent.unshift(extraElement);
  }

  const itemChildren = (
    <Element
      {...(others as any)} // `li` element `onCopy` prop args is not same as `div`
      className={classNames(
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-no-flex`]: !isFlexMode(),
        },
        className,
      )}
    >
      {itemChildrenContent}
    </Element>
  );

  return grid ? (
    <Col flex={1} style={colStyle}>
      {itemChildren}
    </Col>
  ) : (
    itemChildren
  );
};

Item.Meta = Meta;

export default Item;
