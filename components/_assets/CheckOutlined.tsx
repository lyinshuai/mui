import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import CheckOutlinedSvg from './svg/check-outlined.svg';

const CheckOutlinedSvg = () => (
  <svg
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
    fill="currentColor"
    focusable="false"
    aria-hidden="true"
  >
    <path
      d="M28.525 3.729l2.14 1.732a1.4 1.4 0 01.206 1.969l-16.69 20.61a1.4 1.4 0 01-1.754.35 1.388 1.388 0 01-.422-.243l-10.69-8.97a1.4 1.4 0 01-.172-1.972l1.77-2.108a1.4 1.4 0 011.972-.173l7.605 6.381 14.066-17.37a1.4 1.4 0 011.97-.206z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const CheckOutlined: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-check`)}
      component={CheckOutlinedSvg}
      onClick={onClick}
    />
  );
};

CheckOutlined.displayName = 'CheckOutlined';

export default CheckOutlined;
