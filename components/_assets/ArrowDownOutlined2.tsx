import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import ArrowDownOutlined2Svg from './svg/arrow-down-outlined-2.svg';

const ArrowDownOutlined2Svg = () => (
    <svg viewBox="0 0 12 12" width="1em" height="1em" fill="currentColor">
      <path
        d="M8.934 4.04a.5.5 0 00-.707 0l-2.18 2.18-2.118-2.118a.5.5 0 00-.707 0l-.354.353a.5.5 0 000 .707l2.829 2.829a.5.5 0 00.707 0l.353-.354a.504.504 0 00.048-.055L9.287 5.1a.5.5 0 000-.707l-.353-.354z"
        fill="currentColor"
      />
    </svg>
  );

const ArrowDownOutlined2: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-arrow-down`)}
      component={ArrowDownOutlined2Svg}
      onClick={onClick}
    />
  );
};

ArrowDownOutlined2.displayName = 'ArrowDownOutlined2';

export default ArrowDownOutlined2;
