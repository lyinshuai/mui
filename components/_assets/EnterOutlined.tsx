import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import EnterOutlinedSvg from './svg/enter-outlined.svg';

const EnterOutlinedSvg = () => (
  <svg
    viewBox="0 0 14 14"
    width="1em"
    height="1em"
    fill="currentColor"
    focusable="false"
    aria-hidden="true"
  >
    <path
      d="M2.878 9.88a.457.457 0 010-.818l2.66-1.43c.338-.183.76.044.76.408v.723h2.038c.839 0 1.52-.634 1.52-1.417V3.097c0-.26.226-.472.506-.472h.506c.28 0 .507.211.507.472v4.25c0 1.564-1.36 2.832-3.04 2.832H6.299v.723c0 .364-.422.59-.76.409L2.878 9.88z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const EnterOutlined: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-enter`)}
      component={EnterOutlinedSvg}
      onClick={onClick}
    />
  );
};

EnterOutlined.displayName = 'EnterOutlined';

export default EnterOutlined;
