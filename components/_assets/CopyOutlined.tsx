import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import CopyOutlinedSvg from './svg/copy-outlined.svg';

const CopyOutlinedSvg = () => (
  <svg
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    focusable="false"
    aria-hidden="true"
  >
    <path
      d="M3.22 3.22v7.622h7.61V3.219H3.22zM2.71 2.2h8.629a.51.51 0 01.51.51v8.641a.51.51 0 01-.51.51h-8.63a.51.51 0 01-.509-.51V2.71a.51.51 0 01.51-.51zm10.835 1.784c.14 0 .255.114.255.255v9.051a.51.51 0 01-.51.51H4.253a.255.255 0 01-.255-.255v-.467c0-.14.114-.254.255-.254h7.989a.51.51 0 00.51-.51V4.239c0-.141.114-.255.254-.255h.54z"
      stroke="currentColor"
      strokeWidth=".2"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const CopyOutlined: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-copy`)}
      component={CopyOutlinedSvg}
      onClick={onClick}
    />
  );
};

CopyOutlined.displayName = 'CopyOutlined';

export default CopyOutlined;
