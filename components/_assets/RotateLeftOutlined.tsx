import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import RotateLeftOutlinedSvg from './svg/rotate-left-outlined.svg';

const RotateLeftOutlinedSvg = () => (
  <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
    <defs>
      <filter
        x="-14.5%"
        y="-68.8%"
        width="128.9%"
        height="254.2%"
        filterUnits="objectBoundingBox"
        id="prefix__a"
      >
        <feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation="5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.100000001 0"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#prefix__a)" transform="translate(-28 -16)">
      <path d="M30.8 23.966c0-.69.56-1.25 1.25-1.25h5c.691 0 1.25.56 1.25 1.25v5c0 .69-.559 1.25-1.25 1.25h-5c-.69 0-1.25-.56-1.25-1.25v-5zm1.5.25v4.5h4.5v-4.5h-4.5zm.626-4.933a.5.5 0 000 .866l2.625 1.516a.5.5 0 00.75-.433v-.766h1.875a1.5 1.5 0 011.5 1.5v1.5a.5.5 0 00.5.5h.5a.5.5 0 00.5-.5v-1.5a3 3 0 00-3-3H36.3v-.765a.5.5 0 00-.75-.433l-2.625 1.515z" />
    </g>
  </svg>
);

const RotateLeftOutlined: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-rotate-left`)}
      component={RotateLeftOutlinedSvg}
      onClick={onClick}
    />
  );
};

RotateLeftOutlined.displayName = 'RotateLeftOutlined';

export default RotateLeftOutlined;
