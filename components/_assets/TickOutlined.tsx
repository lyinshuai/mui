import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import TickOutlinedSvg from './svg/tick-outlined.svg';

const TickOutlinedSvg = () => (
  <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" aria-hidden="true">
    <g fill="none">
      <path d="M0 0h16v16H0z" />
      <path
        d="M11.885 4.2a.366.366 0 00-.52.05L6.743 9.947 4.557 7.76a.366.366 0 00-.518 0l-.482.482a.366.366 0 000 .518l2.41 2.41.673.63c.157.132.442.106.57-.053l5.26-6.585c.125-.155.045-.442-.108-.57l-.477-.393z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const TickOutlined: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-tick`)}
      component={TickOutlinedSvg}
      onClick={onClick}
    />
  );
};

TickOutlined.displayName = 'TickOutlined';

export default TickOutlined;
