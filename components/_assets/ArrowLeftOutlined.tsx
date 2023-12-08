import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import ArrowLeftOutlinedSvg from "./svg/arrow-left-outlined.svg"

const ArrowLeftOutlinedSvg = () => (
    <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
      <path
        d="M 9.765 8.08 C 9.74 8.008 9.699 7.943 9.645 7.889 L 6.11 4.353 C 5.915 4.158 5.598 4.158 5.403 4.353 L 5.05 4.707 C 4.855 4.902 4.855 5.219 5.05 5.414 L 7.968 8.333 L 5.11 11.19 C 4.915 11.385 4.915 11.702 5.11 11.897 L 5.464 12.251 C 5.659 12.446 5.976 12.446 6.171 12.251 L 9.706 8.715 C 9.877 8.545 9.902 8.277 9.765 8.078 Z"
        fill="currentColor"
        fillRule="nonzero"
        transform="matrix(-1, 0, 0, -1, 14.756893, 16.604)"
      />
    </svg>
  );

const ArrowLeftOutlined: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-arrow-left`)}
      component={ArrowLeftOutlinedSvg}
      onClick={onClick}
    />
  );
};

ArrowLeftOutlined.displayName = 'ArrowLeftOutlined';

export default ArrowLeftOutlined;
