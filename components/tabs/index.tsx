import * as React from 'react';
import classNames from 'classnames';
import MoreOutlined from '../_assets/MoreOutlined';
import PlusOutlined from '../_assets/PlusOutlined';
import { EditableConfig } from './rc-tabs/interface';
import RcTabs, { TabPane, TabsProps as RcTabsProps, TabPaneProps } from './rc-tabs';
import CloseOutlined from '../_assets/CloseOutlined2';

import devWarning from '../_util/devWarning';
import { ConfigContext } from '../config-provider';
import SizeContext, { SizeType } from '../config-provider/SizeContext';

export type TabsType = 'line' | 'card' | 'card-gutter' | 'editable-card' | 'card-large' | 'fill' | 'text';
export type TabsPosition = 'top' | 'right' | 'bottom' | 'left';

export { TabPaneProps };

export interface TabsProps extends Omit<RcTabsProps, 'editable'> {
  type?: TabsType;
  size?: SizeType;
  hideAdd?: boolean;
  centered?: boolean;
  addIcon?: React.ReactNode;
  onEdit?: (e: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => void;
}

function Tabs({
  type = 'line',
  className,
  size: propSize,
  onEdit,
  hideAdd,
  centered,
  addIcon,
  ...props
}: TabsProps) {
  const { prefixCls: customizePrefixCls, moreIcon = <MoreOutlined /> } = props;
  const { getPrefixCls, direction } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('tabs', customizePrefixCls);

  let editable: EditableConfig | undefined;
  if (type === 'editable-card') {
    editable = {
      onEdit: (editType, { key, event }) => {
        onEdit?.(editType === 'add' ? event : key!, editType);
      },
      removeIcon: <CloseOutlined />,
      addIcon: addIcon || <PlusOutlined />,
      showAdd: hideAdd !== true,
    };
  }
  const rootPrefixCls = getPrefixCls();

  devWarning(
    !('onPrevClick' in props) && !('onNextClick' in props),
    'Tabs',
    '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.',
  );

  return (
    <SizeContext.Consumer>
      {contextSize => {
        const size = propSize !== undefined ? propSize : contextSize;
        return (
          <RcTabs
            direction={direction}
            moreTransitionName={`${rootPrefixCls}-slide-up`}
            {...props}
            className={classNames(
              `${prefixCls}-${type}`,
              {
                [`${prefixCls}-${size}`]: size,
                [`${prefixCls}-card`]: ['card-gutter','editable-card'].includes(type ?? ''),
                [`${prefixCls}-card-gutter`]: type === 'editable-card',
                [`${prefixCls}-centered`]: centered,
                [`${prefixCls}-gutter`]: !!props?.tabBarGutter && props?.tabBarGutter > 0,
              },
              className,
            )}
            editable={editable}
            moreIcon={moreIcon}
            prefixCls={prefixCls}
          />
        );
      }}
    </SizeContext.Consumer>
  );
}

Tabs.TabPane = TabPane;

export default Tabs;
