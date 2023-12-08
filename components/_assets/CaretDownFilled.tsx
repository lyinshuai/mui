import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import CaretDownFilledSvg from './svg/caret-down-filled.svg';

const CaretDownFilledSvg = () => (
  <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
    <path
      d="M 4.893 3.161 C 4.541 2.938 4.081 3.182 4.064 3.596 C 4.064 3.603 4.064 3.609 4.064 3.615 L 4.064 12.385 C 4.067 12.802 4.519 13.06 4.88 12.848 C 4.882 12.846 4.888 12.842 4.893 12.839 L 11.514 8.755 C 12.078 8.41 12.078 7.589 11.514 7.243 L 4.893 3.161 Z"
      fill="currentColor"
      fillRule="nonzero"
      transform="matrix(0, 1, -1, 0, 16.000653, -0.000347)"
    />
  </svg>
);

const CaretDownFilled: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-caret-right`)}
      component={CaretDownFilledSvg}
      onClick={onClick}
    />
  );
};

CaretDownFilled.displayName = 'CaretDownFilled';

export default CaretDownFilled;
