import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import CloseOutlinedSvg from './svg/close-outlined.svg';

const CloseOutlinedSvg = () => (
  <svg
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
    fill="currentColor"
    focusable="false"
    aria-hidden="true"
  >
    <g fill="currentColor" fillRule="evenodd">
      <path d="M26.617 3.99l1.556 1.556a1.4 1.4 0 010 1.98L7.525 28.172a1.4 1.4 0 01-1.98 0L3.99 26.617a1.4 1.4 0 010-1.98L24.637 3.99a1.4 1.4 0 011.98 0z" />
      <path d="M5.546 3.99L3.99 5.546a1.4 1.4 0 000 1.98l20.647 20.647a1.4 1.4 0 001.98 0l1.556-1.556a1.4 1.4 0 000-1.98L7.525 3.99a1.4 1.4 0 00-1.98 0z" />
    </g>
  </svg>
);

const CloseOutlined: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-close`)}
      component={CloseOutlinedSvg}
      onClick={onClick}
    />
  );
};

CloseOutlined.displayName = 'CloseOutlined';

export default CloseOutlined;
