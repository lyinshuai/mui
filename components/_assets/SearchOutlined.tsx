import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';

const SearchOutlinedSvg = () => (
  <svg viewBox="0 0 17 16" width="1em" height="1em" fill="currentColor">
    <path
      d="M14.958 13.994l-4.545-4.545A5.203 5.203 0 0011.5 6.25c0-1.404-.548-2.72-1.538-3.712A5.211 5.211 0 006.25 1a5.219 5.219 0 00-3.712 1.538A5.208 5.208 0 001 6.25c0 1.402.548 2.721 1.538 3.712A5.208 5.208 0 006.25 11.5a5.207 5.207 0 003.197-1.085l4.545 4.543a.144.144 0 00.203 0l.763-.761a.144.144 0 000-.203zM9.022 9.022A3.899 3.899 0 016.25 10.17a3.899 3.899 0 01-2.772-1.148A3.899 3.899 0 012.33 6.25c0-1.046.408-2.032 1.148-2.772A3.899 3.899 0 016.25 2.33c1.046 0 2.032.406 2.772 1.148A3.899 3.899 0 0110.17 6.25a3.896 3.896 0 01-1.148 2.772z"
      fill="#4E5969"
      fillRule="evenodd"
    />
  </svg>
);

const SearchOutlined: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-search`)}
      component={SearchOutlinedSvg}
      onClick={onClick}
    />
  );
};

SearchOutlined.displayName = 'SearchOutlined';

export default SearchOutlined;
