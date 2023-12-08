import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';

const FilterOutlinedSvg = () => (
  <svg viewBox="0 0 17 16" width="1em" height="1em" fill="currentColor">
    <path
      d="M12.292 1.9c.55 0 1.043.334 1.248.844.18.456.1.97-.196 1.345l-.095.108-3.23 3.86v5.938a.636.636 0 01-.341.559l-.1.046h-.196a.616.616 0 01-.376-.12l-.07-.064-2.687-1.96a.66.66 0 01-.161-.344l-.007-.097.028-3.866-3.815-3.956a1.342 1.342 0 01.816-2.286l.135-.007h9.047zm.01 1.299h-9.06c-.021 0-.041.012-.062.05a.051.051 0 00-.01.033l.003.012 4.004 4.135a.67.67 0 01.17.334l.011.097v3.931l1.383.759V7.882a.65.65 0 01.116-.374L12.325 3.3l.026.009-.01-.014a.054.054 0 00.02-.04l-.003-.022a.054.054 0 00-.055-.034z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const FilterOutlined: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-filter`)}
      component={FilterOutlinedSvg}
      onClick={onClick}
    />
  );
};

FilterOutlined.displayName = 'FilterOutlined';

export default FilterOutlined;
