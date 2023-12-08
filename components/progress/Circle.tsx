import * as React from 'react';
import { Circle as RCCircle } from 'rc-progress';
import classNames from 'classnames';
import { validProgress, getSuccessPercent } from './utils';
import { ProgressProps } from './progress';

interface CircleProps extends ProgressProps {
  prefixCls: string;
  children: React.ReactNode;
  progressStatus: string;
}

function getPercentage({ percent, success, successPercent }: CircleProps) {
  const realSuccessPercent = validProgress(getSuccessPercent({ success, successPercent }));
  return [realSuccessPercent, validProgress(validProgress(percent) - realSuccessPercent)];
}

function getStrokeColor({
  success = {},
  strokeColor,
}: Partial<CircleProps>): (string | null | Record<string, string>)[] {
  const { strokeColor: successColor } = success;
  return [successColor || null, strokeColor || null!];
}

const sizeMap = {
  'small': 48,
  'default': 80,
  'large': 96,
}

const fontSizeMap = {
  'small': 14,
  'default': 16,
  'large': 20,
}

const strokeWidtheMap = {
  'small': 7,
  'default': 7,
  'large': 7,
}

const Circle: React.FC<CircleProps> = props => {
  const {
    prefixCls,
    width,
    strokeWidth,
    trailColor,
    strokeLinecap,
    gapPosition,
    gapDegree,
    type,
    children,
    success,
    size,
  } = props;
  const circleSize = width || sizeMap[size || 'default'];
  const circleStyle = {
    width: circleSize,
    height: circleSize,
    fontSize: fontSizeMap[size || 'default'],
  } as React.CSSProperties;
  const circleWidth = strokeWidth || strokeWidtheMap[size || 'default'];
  const gapPos = gapPosition || (type === 'dashboard' && 'bottom') || 'top';

  const getGapDegree = () => {
    // Support gapDeg = 0 when type = 'dashboard'
    if (gapDegree || gapDegree === 0) {
      return gapDegree;
    }
    if (type === 'dashboard') {
      return 75;
    }
    return undefined;
  };

  // using className to style stroke color
  const isGradient = Object.prototype.toString.call(props.strokeColor) === '[object Object]';
  const strokeColor = getStrokeColor({ success, strokeColor: props.strokeColor });

  const wrapperClassName = classNames(`${prefixCls}-inner`, {
    [`${prefixCls}-circle-gradient`]: isGradient,
  });

  return (
    <div className={wrapperClassName} style={circleStyle}>
      <RCCircle
        percent={getPercentage(props)}
        strokeWidth={circleWidth}
        trailWidth={circleWidth}
        strokeColor={strokeColor as any}
        strokeLinecap={strokeLinecap}
        trailColor={trailColor}
        prefixCls={prefixCls}
        gapDegree={getGapDegree()}
        gapPosition={gapPos}
      />
      {children}
    </div>
  );
};

export default Circle;
