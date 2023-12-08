import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import InfoCircleFilledSvg from './svg/info-circle-filled.svg';

const InfoCircleFilledSvg = () => (
  <svg viewBox="0 0 40 40" width="1em" height="1em" fill="currentColor">
    <g fill="none" fillRule="evenodd">
      <path
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="currentColor"
        fillRule="nonzero"
      />
      <path
        d="M21.13 15c.48 0 .87-.39.87-.87v-2.26a.87.87 0 00-.87-.87h-2.26a.87.87 0 00-.87.87v2.26c0 .48.39.87.87.87h2.26zm0 14c.48 0 .87-.43.87-.958V17.958c0-.529-.39-.958-.87-.958h-2.26c-.48 0-.87.43-.87.958v10.084c0 .529.39.958.87.958h2.26z"
        fill="#FFF"
      />
    </g>
  </svg>
);

const InfoCircleFilled: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-info-circle`)}
      component={InfoCircleFilledSvg}
      onClick={onClick}
    />
  );
};

InfoCircleFilled.displayName = 'InfoCircleFilled';

export default InfoCircleFilled;
