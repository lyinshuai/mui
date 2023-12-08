import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import ArrowLeftOutlined2Svg from "./svg/arrow-left-outlined-2.svg"

const ArrowLeftOutlined2Svg = () => (
  <svg
    viewBox="0 0 12 12"
    width="1em"
    height="1em"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
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
      transform="matrix(-1, 0, 0, -1, 174.155991, 70.028984)"
      fill="currentColor"
      fillRule="nonzero"
    >
      <path d="M166.102 61.159a.5.5 0 000 .707l2.18 2.18-2.117 2.118a.5.5 0 000 .707l.353.353a.5.5 0 00.707 0l2.829-2.828a.5.5 0 000-.707l-.354-.354a.505.505 0 00-.055-.047l-2.482-2.483a.5.5 0 00-.707 0l-.354.354z" />
    </g>
  </svg>
);

const ArrowLeftOutlined2: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-arrow-left-2`)}
      component={ArrowLeftOutlined2Svg}
      onClick={onClick}
    />
  );
};

ArrowLeftOutlined2.displayName = 'ArrowLeftOutlined2';

export default ArrowLeftOutlined2;
