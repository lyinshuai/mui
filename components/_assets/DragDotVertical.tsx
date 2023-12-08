import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import DragDotVerticalOutlinedSvg from './svg/drag-dot-vertical-outlined.svg';

const DragDotVerticalOutlinedSvg = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    viewBox="0 0 48 48"
    aria-hidden="true"
    focusable="false"
    width="1em"
    height="1em"
  >
    <path
      fill="currentColor"
      stroke="none"
      d="M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z"
    />
    <path d="M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z" />
  </svg>
);

const DragDotVerticalOutlined: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-drag-dot-vertial`)}
      component={DragDotVerticalOutlinedSvg}
      onClick={onClick}
    />
  );
};

DragDotVerticalOutlined.displayName = 'DragDotVerticalOutlined';

export default DragDotVerticalOutlined;
