import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import ArrowRightOutlined2Svg from './svg/arrow-right-outlined-2.svg';

const ArrowRightOutlined2Svg = () => (
  <svg viewBox="0 0 12 12" width="1em" height="1em" fill="currentColor">
    <defs>
      <filter
        x="-14.7%"
        y="-13%"
        width="129.3%"
        height="126%"
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
    <g
      filter="url(#prefix__a)"
      transform="translate(-162 -58)"
      fill="currentColor"
      fillRule="nonzero"
    >
      <path d="M166.102 61.159a.5.5 0 000 .707l2.18 2.18-2.117 2.118a.5.5 0 000 .707l.353.353a.5.5 0 00.707 0l2.829-2.828a.5.5 0 000-.707l-.354-.354a.505.505 0 00-.055-.047l-2.482-2.483a.5.5 0 00-.707 0l-.354.354z" />
    </g>
  </svg>
);

const ArrowRightOutlined2: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-arrow-right-2`)}
      component={ArrowRightOutlined2Svg}
      onClick={onClick}
    />
  );
};

ArrowRightOutlined2.displayName = 'ArrowRightOutlined2';

export default ArrowRightOutlined2;
