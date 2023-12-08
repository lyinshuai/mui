import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import PlusOutlinedSvg from './svg/plus-outlined.svg';

const PlusOutlinedSvg = () => (
  <svg
    viewBox="0 0 12 12"
    width="1em"
    height="1em"
    fill="currentColor"
    focusable="false"
    aria-hidden="true"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h12v12H0z" />
      <path
        d="M5.5 2a.5.5 0 00-.5.5V5H2.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H5v2.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V7h2.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H7V2.5a.5.5 0 00-.5-.5h-1z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const PlusOutlined: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-plus`)}
      component={PlusOutlinedSvg}
      onClick={onClick}
    />
  );
};

PlusOutlined.displayName = 'PlusOutlined';

export default PlusOutlined;
