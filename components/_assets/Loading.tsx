import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';

const getLoadingSvg = (id: string) => () =>
  (
    <svg
      viewBox="0 0 250 250"
      width="1em"
      height="1em"
      fill="currentColor"
      focusable="false"
      data-icon="loading"
      aria-hidden="true"
    >
      <defs>
        <linearGradient y2="1" x2="1" y1="0" x1="0" id={`${id}1`}>
          <stop stopOpacity="0.5" stopColor="currentColor" offset="0" />
          <stop stopColor="currentColor" offset="1" />
        </linearGradient>
        <linearGradient y2="0" x2="0" y1="1" x1="0" id={`${id}2`}>
          <stop stopOpacity="0.5" stopColor="currentColor" offset="0.1" />
          <stop stopOpacity="0" stopColor="currentColor" offset="1" />
        </linearGradient>
      </defs>
      <path
        id="svg_1"
        strokeWidth="40"
        stroke={`url(#${id + 1})`}
        fill="none"
        d="M 124.683 21.156 C 204.749 21.156 254.791 107.83 214.758 177.169 C 196.179 209.35 161.842 229.173 124.683 229.173"
      />
      <path
        id="svg_2"
        strokeWidth="40"
        stroke={`url(#${id + 2})`}
        fill="none"
        d="M 20.528 21.156 C 100.594 21.156 150.635 107.829 110.602 177.169 C 92.022 209.349 57.687 229.173 20.528 229.173"
        transform="matrix(-1, 0, 0, -1, 145.219734, 250.328999)"
      />
    </svg>
  );

const styleMap = {
  inherit: 'inherit',
  default: '#2171FE',
  white: 'white',
};

type styleKey = keyof Omit<typeof styleMap, 'inherit'>;

const typeMap: Record<styleKey, React.FC> = {
  default: getLoadingSvg(styleMap.default),
  white: getLoadingSvg(styleMap.white),
};

const LoadingOutlined: React.FC<
  IconComponentProps & {
    spin?: boolean;
    type?: keyof typeof styleMap;
  }
> = ({ className, spin = true, type = 'default', style }) => {
  const { getIconPrefixCls } = globalConfig();
  const [unId, setUnId] = React.useState<string>('');
  const iconPrefixCls = getIconPrefixCls();
  const color = styleMap[type];
  const isInherit = color === 'inherit';

  React.useLayoutEffect(() => {
    if (!isInherit) return;
    setUnId(`id${(Math.random() * 100000).toFixed(0)}`);
  }, []);
  const loadingSvg = isInherit ? getLoadingSvg(unId) : typeMap[type as styleKey];

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-loading`, {
        [`${iconPrefixCls}-spin`]: !!spin,
      })}
      style={{
        color,
        ...style,
      }}
      component={loadingSvg}
    />
  );
};

export default LoadingOutlined;
