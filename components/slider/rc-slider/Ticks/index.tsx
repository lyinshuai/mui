import * as React from 'react';
import type { InternalMarkObj } from '../Marks';
import SliderContext from '../context';
import Tick from './Tick';

export interface StepsProps {
  prefixCls: string;
  marks: InternalMarkObj[];
  dots?: boolean;
  style?: React.CSSProperties;
  activeStyle?: React.CSSProperties;
}

export default function Steps(props: StepsProps) {
  const { prefixCls, style, activeStyle } = props;
  const { min, max, step, showTicks } = React.useContext(SliderContext);

  const stepTicks = React.useMemo(() => {
    const ticks = []

    if (showTicks) {
      let current = min;
      while (current <= max - 1) {
        if (current !== 0) {
          ticks.push(current);
        }
        current += step!;
      }
    }

    return ticks;
  }, [min, max, step, showTicks]);

  return (
    <div className={`${prefixCls}-ticks`}>
      {stepTicks.map((item) => (
        <Tick
          prefixCls={prefixCls}
          key={item}
          value={item}
          style={style}
          activeStyle={activeStyle}
        />
      ))}
    </div>
  );
}
