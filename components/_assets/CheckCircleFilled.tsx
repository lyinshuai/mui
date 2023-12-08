import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import CheckCircleFilledSvg from './svg/check-circle-filled.svg';

const CheckCircleFilledSvg = () => (
  <svg viewBox="0 0 40 40" width="1em" height="1em" fill="currentColor">
    <g fill="none" fillRule="evenodd">
      <path
        d="M20 0c11.046 0 20 8.954 20 20s-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0z"
        fill="currentColor"
      />
      <path
        d="M26.537 13.81l.936.786c.517.433.585 1.204.151 1.722l-8.176 9.738a1.224 1.224 0 01-1.723.15l-1.873-1.572 8.962-10.674a1.223 1.223 0 011.723-.15z"
        fill="#FFF"
      />
      <path
        d="M12.715 20.27l.82-.91a1.222 1.222 0 011.706-.109l5.75 4.95-1.564 1.882a1.222 1.222 0 01-1.74.142l-4.864-4.212a1.222 1.222 0 01-.108-1.742z"
        fill="#FFF"
      />
    </g>
  </svg>
);

const CheckCircleFilled: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-check-circle`)}
      component={CheckCircleFilledSvg}
      onClick={onClick}
    />
  );
};

CheckCircleFilled.displayName = 'CheckCircleFilled';

export default CheckCircleFilled;
