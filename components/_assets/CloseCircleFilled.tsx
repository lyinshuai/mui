import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import CloseCircleFilledSvg from './svg/close-circle-filled.svg';

const CloseCircleFilledSvg = () => (
  <svg viewBox="0 0 40 40" width="1em" height="1em" fill="currentColor">
    <g fillRule="nonzero" fill="none">
      <path
        d="M20 0c11.046 0 20 8.954 20 20s-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0z"
        fill="currentColor"
      />
      <path
        d="M26.776 12.351l1.485 1.485a1.2 1.2 0 010 1.697l-4.774 4.774 4.774 4.774a1.2 1.2 0 010 1.697l-1.485 1.485a1.2 1.2 0 01-1.697 0l-4.775-4.774-4.77 4.772a1.2 1.2 0 01-1.698 0l-1.485-1.484a1.2 1.2 0 010-1.698l4.771-4.772-4.77-4.772a1.2 1.2 0 010-1.697l1.484-1.485a1.2 1.2 0 011.697 0l4.772 4.773 4.774-4.775a1.2 1.2 0 011.697 0z"
        fill="#FFF"
      />
    </g>
  </svg>
);

const CloseCircleFilled: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-close-circle`)}
      component={CloseCircleFilledSvg}
      onClick={onClick}
    />
  );
};

CloseCircleFilled.displayName = 'CloseCircleFilled';

export default CloseCircleFilled;
