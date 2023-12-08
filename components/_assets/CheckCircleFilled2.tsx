import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import CheckCircleFilled2Svg from './svg/check-circle-filled-2.svg';

const CheckCircleFilled2Svg = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <g fill="none" fillRule="evenodd">
      <path
        d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1z"
        fill="currentColor"
      />
      <path
        d="M16.95 7.677l.856.698c.385.3.435.831.112 1.188l-5.946 7.37a.952.952 0 01-.87.286.83.83 0 01-.43-.197l-3.605-3.14a.84.84 0 01-.085-1.184l.01-.012.77-.882a.835.835 0 011.167-.075l2.21 1.915 4.554-5.789c.323-.356.872-.477 1.257-.178z"
        fill="#FFF"
      />
    </g>
  </svg>
);

const CheckCircleFilled2: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-check-circle-2`)}
      component={CheckCircleFilled2Svg}
      onClick={onClick}
    />
  );
};

CheckCircleFilled2.displayName = 'CheckCircleFilled2';

export default CheckCircleFilled2;
