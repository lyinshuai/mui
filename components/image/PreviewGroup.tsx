import * as React from 'react';
import RotateLeftOutlined from '../_assets/RotateLeftOutlined';
import RotateRightOutlined from '../_assets/RotateRightOutlined';
import ZoomInOutlined from '../_assets/ZoomInOutlined';
import ZoomOutOutlined from '../_assets/ZoomOutOutlined';
import CloseOutlined from '../_assets/CloseOutlined2';
import LeftOutlined from '../_assets/ArrowLeftOutlined';
import RightOutlined from '../_assets/ArrowRightOutlined';
import RcImage from './rc-image';
import { GroupConsumerProps } from './rc-image/PreviewGroup';
import { ConfigContext } from '../config-provider';
import { getTransitionName } from '../_util/motion';

export const icons = {
  rotateLeft: <RotateLeftOutlined />,
  rotateRight: <RotateRightOutlined />,
  zoomIn: <ZoomInOutlined />,
  zoomOut: <ZoomOutOutlined />,
  close: <CloseOutlined />,
  left: <LeftOutlined />,
  right: <RightOutlined />,
};

const InternalPreviewGroup: React.FC<GroupConsumerProps> = ({
  previewPrefixCls: customizePrefixCls,
  preview,
  ...props
}) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('image-preview', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();

  const mergedPreview = React.useMemo(() => {
    if (preview === false) {
      return preview;
    }
    const _preview = typeof preview === 'object' ? preview : {};

    return {
      ..._preview,
      transitionName: getTransitionName(rootPrefixCls, 'zoom', _preview.transitionName),
      maskTransitionName: getTransitionName(rootPrefixCls, 'fade', _preview.maskTransitionName),
    };
  }, [preview]);

  return (
    <RcImage.PreviewGroup
      preview={mergedPreview}
      previewPrefixCls={prefixCls}
      icons={icons}
      {...props}
    />
  );
};

export default InternalPreviewGroup;
