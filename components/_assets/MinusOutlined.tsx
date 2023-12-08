import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';

const MinusOutlinedSvg = () => (
  <svg viewBox="0 0 15 14" width="1em" height="1em" fill="currentColor">
    <g fill="none" fillRule="evenodd">
      <path
        d="M1.33 2.625c0-.966.784-1.75 1.75-1.75h8.75c.967 0 1.75.784 1.75 1.75v8.75a1.75 1.75 0 01-1.75 1.75H3.08a1.75 1.75 0 01-1.75-1.75v-8.75z"
        stroke="currentColor"
        strokeWidth="1.05"
      />
      <path
        d="M9.643 6.125c.242 0 .438.196.438.438v.875a.438.438 0 01-.438.437H5.268a.438.438 0 01-.437-.438v-.875c0-.241.196-.437.437-.437h4.375z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const MinusOutlined: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-minus`)}
      component={MinusOutlinedSvg}
      onClick={onClick}
    />
  );
};

MinusOutlined.displayName = 'MinusOutlined';

export default MinusOutlined;
