import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import ExclamationCircleFilledSvg from './svg/exclamation-circle-filled.svg'

const ExclamationCircleFilledSvg = () => (
  <svg viewBox="0 0 40 40" width="1em" height="1em" fill="currentColor">
    <g fill="none" fillRule="evenodd">
      <path
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="currentColor"
        fillRule="nonzero"
      />
      <path
        d="M21.173 23.945c.487 0 .882.395.882.882v2.292a.881.881 0 01-.882.881h-2.292a.881.881 0 01-.881-.881v-2.292c0-.487.395-.882.881-.882h2.292zm0-12.945c.487 0 .882.395.882.881v9.273a.881.881 0 01-.882.882h-2.292a.881.881 0 01-.881-.882v-9.273c0-.486.395-.881.881-.881h2.292z"
        fill="#FFF"
      />
    </g>
  </svg>
);

const ExclamationCircleFilled: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-exclamation-circle`)}
      component={ExclamationCircleFilledSvg}
      onClick={onClick}
    />
  );
};

ExclamationCircleFilled.displayName = 'ExclamationCircleFilled';

export default ExclamationCircleFilled;
