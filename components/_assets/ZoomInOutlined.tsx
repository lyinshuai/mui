import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import ZoomInOutlinedSvg from './svg/zoom-in-outlined.svg'

const ZoomInOutlinedSvg = () => (
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
    <g filter="url(#prefix__a)" transform="translate(-192 4)" fill="none" fillRule="evenodd">
      <g fill="currentColor">
        <path d="M219.4 26.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0 1.5a5 5 0 100-10 5 5 0 000 10z" />
        <path
          d="M223.4 25.94l2.534 2.533a.5.5 0 010 .707l-.354.354a.5.5 0 01-.707 0L222.34 27l1.06-1.06z"
          fillRule="nonzero"
        />
        <path d="M219.645 21a.3.3 0 01.3.3v1.155h1.155a.3.3 0 01.3.3v.49a.3.3 0 01-.3.3h-1.155V24.7a.3.3 0 01-.3.3h-.49a.3.3 0 01-.3-.3v-1.155H217.7a.3.3 0 01-.3-.3v-.49a.3.3 0 01.3-.3h1.155V21.3a.3.3 0 01.3-.3h.49z" />
      </g>
    </g>
  </svg>
);

const ZoomInOutlined: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-zoom-in`)}
      component={ZoomInOutlinedSvg}
      onClick={onClick}
    />
  );
};

ZoomInOutlined.displayName = 'ZoomInOutlined';

export default ZoomInOutlined;
