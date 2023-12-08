import React from 'react';
import CSSMotion from 'rc-motion';
import MLoadingIcon from '../_assets/Loading';
import { ButtonType } from '.';

export interface LoadingIconProps {
  type: ButtonType;
  ghost: boolean;
  prefixCls: string;
  existIcon: boolean;
  loading?: boolean | object;
}
const getCollapsedWidth = () => ({ width: 0, opacity: 0, transform: 'scale(0)' });
const getRealWidth = (node: HTMLElement) => ({
  width: node.scrollWidth,
  opacity: 1,
  transform: 'scale(1)',
});

const LoadingIcon: React.FC<LoadingIconProps> = ({
  type,
  ghost,
  prefixCls,
  loading,
  existIcon,
}) => {
  const visible = !!loading;
  const loadingType = type === 'primary' && !ghost ? 'white' : 'inherit';

  if (existIcon) {
    return (
      <span className={`${prefixCls}-loading-icon`}>
        <MLoadingIcon type={loadingType} />
      </span>
    );
  }

  return (
    <CSSMotion
      visible={visible}
      // We do not really use this motionName
      motionName={`${prefixCls}-loading-icon-motion`}
      removeOnLeave
      onAppearStart={getCollapsedWidth}
      onAppearActive={getRealWidth}
      onEnterStart={getCollapsedWidth}
      onEnterActive={getRealWidth}
      onLeaveStart={getRealWidth}
      onLeaveActive={getCollapsedWidth}
    >
      {({ className, style }: { className?: string; style?: React.CSSProperties }, ref: any) => (
        <span className={`${prefixCls}-loading-icon`} style={style} ref={ref}>
          <MLoadingIcon className={className} type={loadingType} />
        </span>
      )}
    </CSSMotion>
  );
};

export default LoadingIcon;
