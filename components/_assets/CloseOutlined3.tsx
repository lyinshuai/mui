import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import CloseOutlined3Svg from './svg/close-outlined-3.svg';

const CloseOutlined3Svg = () => (
  <svg viewBox="0 0 32 32" width="1em" height="1em" fill="currentColor">
    <path d="M20.316 16l10.79-10.789A3.052 3.052 0 1026.79.895L16 11.684 5.21.895A3.052 3.052 0 10.894 5.211L11.684 16 .894 26.791a3.052 3.052 0 104.316 4.316L16 20.316l10.79 10.791a3.052 3.052 0 104.316-4.316L20.316 16z" />
  </svg>
);

const CloseOutlined3: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-close-3`)}
      component={CloseOutlined3Svg}
      onClick={onClick}
    />
  );
};

CloseOutlined3.displayName = 'CloseOutlined3';

export default CloseOutlined3;
