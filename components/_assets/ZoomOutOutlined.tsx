import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import ZoomOutOutlinedSvg from './svg/zoom-out-outlined.svg';

const ZoomOutOutlinedSvg = () => (
  <svg viewBox="20 20 16 16" width="1em" height="1em" fill="currentColor">
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
    <g filter="url(#prefix__a)" transform="translate(-88 4)" fill="currentColor" fillRule="evenodd">
      <path d="M115 26.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0 1.5a5 5 0 100-10 5 5 0 000 10z" />
      <path
        d="M119 25.94l2.534 2.533a.5.5 0 010 .707l-.354.354a.5.5 0 01-.707 0L117.94 27l1.06-1.06z"
        fillRule="nonzero"
      />
      <path d="M113 22.55a.3.3 0 01.3-.3h3.4a.3.3 0 01.3.3v.9a.3.3 0 01-.3.3h-3.4a.3.3 0 01-.3-.3v-.9z" />
    </g>
  </svg>
);

const ZoomOutOutlined: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-zoom-out`)}
      component={ZoomOutOutlinedSvg}
      onClick={onClick}
    />
  );
};

ZoomOutOutlined.displayName = 'ZoomOutOutlined';

export default ZoomOutOutlined;
