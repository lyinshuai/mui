import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import MoreOutlinedSvg from './svg/more-outlined.svg';

const MoreOutlinedSvg = () => (
  <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
    <g fill="none" fillRule="evenodd">
      <path d="M0 16h16V0H0z" />
      <path
        d="M9.336 9.334H6.669V6.667h2.667v2.667zm5.332 0h-2.667V6.666h2.667v2.666zm-13.335 0H4V6.667H1.333v2.667z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const MoreOutlined: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-more`)}
      component={MoreOutlinedSvg}
      onClick={onClick}
    />
  );
};

MoreOutlined.displayName = 'MoreOutlined';

export default MoreOutlined;
