import * as React from 'react';
import classNames from 'classnames';
// import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import FileOutlined from '@ant-design/icons/FileOutlined';
import MinusSquareOutlined from '@ant-design/icons/MinusSquareOutlined';
import PlusSquareOutlined from '@ant-design/icons/PlusSquareOutlined';
import LoadingIcon from '../../_assets/Loading'
import CaretDownFilled from '../../_assets/CaretDownFilled'
import { AntTreeNodeProps } from '../Tree';
import { isValidElement, cloneElement } from '../../_util/reactNode';

export default function renderSwitcherIcon(
  prefixCls: string,
  switcherIcon: React.ReactNode,
  showLine: boolean | { showLeafIcon: boolean } | undefined,
  { isLeaf, expanded, loading }: AntTreeNodeProps,
) {
  if (loading) {
    return <LoadingIcon className={`${prefixCls}-switcher-loading-icon`} type="inherit" />;
  }
  let showLeafIcon;
  if (showLine && typeof showLine === 'object') {
    showLeafIcon = showLine.showLeafIcon;
  }
  if (isLeaf) {
    if (showLine) {
      if (typeof showLine === 'object' && !showLeafIcon) {
        return <span className={`${prefixCls}-switcher-leaf-line`} />;
      }
      return <FileOutlined className={`${prefixCls}-switcher-line-icon`} />;
    }
    return null;
  }
  const switcherCls = `${prefixCls}-switcher-icon`;
  if (isValidElement(switcherIcon)) {
    return cloneElement(switcherIcon, {
      className: classNames(switcherIcon.props.className || '', switcherCls),
    });
  }

  if (switcherIcon) {
    return switcherIcon;
  }

  if (showLine) {
    return expanded ? (
      <MinusSquareOutlined className={`${prefixCls}-switcher-line-icon`} />
    ) : (
      <PlusSquareOutlined className={`${prefixCls}-switcher-line-icon`} />
    );
  }
  return <CaretDownFilled className={switcherCls} />;
}
