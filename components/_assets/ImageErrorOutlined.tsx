import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import ImageErrorOutlinedSVG from './svg/image-error-outlined.svg';

const ImageErrorOutlinedSVG = () => (
  <svg viewBox="0 0 28 28" width="1em" height="1em" fill="currentColor">
    <defs>
      <path id="image_error" d="M0 0h28v28H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="prefix__b" fill="#fff">
        <use href="#image_error" />
      </mask>
      <g mask="url(#prefix__b)">
        <path d="M-2-2h32v32H-2z" />
        <path
          d="M21.7 4.623c.493 0 .898.382.934.867l.003.07v8.545a6.032 6.032 0 00-1.875-.061V6.498h-15v15h9.931c.175.679.466 1.311.85 1.875H4.823a.938.938 0 01-.935-.868l-.002-.07V5.56c0-.494.382-.899.867-.935l.07-.002H21.7zm-2.817 7.935V14.6a6.002 6.002 0 00-3.367 5.022h-3.923a.282.282 0 01-.075-.01l-4.01-.01a.281.281 0 01-.2-.481l3.875-3.874a.375.375 0 01.53 0l1.788 1.787 4.742-4.74a.375.375 0 01.64.264zM10.45 8.372v2.813H7.637V8.372h2.812zM21.504 24.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-1.594-6.445a.5.5 0 01.707 0l.884.884.884-.884a.5.5 0 01.707 0l.354.354a.5.5 0 010 .707l-.884.884.884.884a.5.5 0 010 .707l-.354.353a.5.5 0 01-.707 0l-.884-.883-.884.883a.5.5 0 01-.707 0l-.353-.353a.5.5 0 010-.707L20.44 20l-.884-.884a.5.5 0 010-.707l.353-.354z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

const ImageErrorOutlined: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-image-error`)}
      component={ImageErrorOutlinedSVG}
      onClick={onClick}
    />
  );
};

ImageErrorOutlined.displayName = 'ImageErrorOutlined';

export default ImageErrorOutlined;
