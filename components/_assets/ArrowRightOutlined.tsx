import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import ArrowRightOutlinedSvg from './svg/arrow-right-outlined.svg'

const ArrowRightOutlinedSvg = () => (
  <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
    <path d="M10.765 8.08a.498.498 0 00-.12-.191L7.11 4.353a.5.5 0 00-.707 0l-.353.354a.5.5 0 000 .707l2.918 2.919L6.11 11.19a.5.5 0 000 .707l.354.354a.5.5 0 00.707 0l3.535-3.536a.5.5 0 00.059-.637z" />
  </svg>
);

const ArrowRightOutlined: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-arrow-right`)}
      component={ArrowRightOutlinedSvg}
      onClick={onClick}
    />
  );
};

ArrowRightOutlined.displayName = 'ArrowRightOutlined';

export default ArrowRightOutlined;
