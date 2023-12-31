import * as React from 'react';
import classNames from 'classnames';
import { getDirectionStyle } from '../util';
import SliderContext from '../context';

export interface TickProps {
  prefixCls: string;
  value: number;
  style?: React.CSSProperties;
  activeStyle?: React.CSSProperties;
}

export default function Tick(props: TickProps) {
  const { prefixCls, value, style, activeStyle } = props;
  const { min, max, direction, included, includedStart, includedEnd } = React.useContext(SliderContext);

  const dotClassName = `${prefixCls}-tick`;
  const active = included && includedStart <= value && value <= includedEnd;

  // ============================ Offset ============================
  let mergedStyle = {
    ...getDirectionStyle(direction, value, min, max),
    ...style,
  };

  if (active) {
    mergedStyle = {
      ...mergedStyle,
      ...activeStyle,
    };
  }

  return (
    <span
      className={classNames(dotClassName, {
        [`${dotClassName}-active`]: active,
      })}
      style={mergedStyle}
    />
  );
}
