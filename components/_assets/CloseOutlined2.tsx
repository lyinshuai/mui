import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import CloseOutlined2Svg from './svg/close-outlined-2.svg';

const CloseOutlined2Svg = () => (
  <svg
    viewBox="0 0 12 12"
    width="1em"
    height="1em"
    fill="currentColor"
    focusable="false"
    aria-hidden="true"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h12v12H0z" />
      <path
        d="M8.298 3.348a.5.5 0 00-.707 0L6 4.94 4.409 3.35a.5.5 0 00-.707 0l-.354.353a.5.5 0 000 .707L4.94 6 3.35 7.591a.5.5 0 000 .707l.353.354a.5.5 0 00.707 0L6 7.06l1.59 1.59a.5.5 0 00.708 0l.354-.353a.5.5 0 000-.707L7.06 6l1.59-1.591a.5.5 0 000-.707l-.353-.354z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const CloseOutlined2: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-close-2`)}
      component={CloseOutlined2Svg}
      onClick={onClick}
    />
  );
};

CloseOutlined2.displayName = 'CloseOutlined2';

export default CloseOutlined2;
