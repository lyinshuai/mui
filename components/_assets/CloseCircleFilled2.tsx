import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import CloseCircleFilled2Svg from './svg/close-circle-filled-2.svg';

const CloseCircleFilled2Svg = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <g fill="none" fillRule="evenodd">
      <path
        d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1z"
        fill="currentColor"
        fillRule="nonzero"
      />
      <path
        d="M15.893 7.21l.894.894a.722.722 0 010 1.022l-2.874 2.873 2.874 2.873a.722.722 0 010 1.022l-.894.894a.722.722 0 01-1.021 0l-2.875-2.875-2.87 2.874a.722.722 0 01-1.022 0l-.894-.894a.722.722 0 010-1.022L10.08 12l-2.87-2.872a.722.722 0 010-1.021l.894-.894a.722.722 0 011.021 0l2.871 2.871 2.875-2.872a.722.722 0 011.021 0z"
        fill="#FFF"
      />
    </g>
  </svg>
);

const CloseCircleFilled2: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-close-circle-2`)}
      component={CloseCircleFilled2Svg}
      onClick={onClick}
    />
  );
};

CloseCircleFilled2.displayName = 'CloseCircleFilled';

export default CloseCircleFilled2;
