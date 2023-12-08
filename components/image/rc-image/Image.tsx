// @ts-nocheck

import * as React from 'react';
import { useState } from 'react';
import cn from 'classnames';
import { getOffset } from 'rc-util/lib/Dom/css';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import type { GetContainer } from 'rc-util/lib/PortalWrapper';
import type { PreviewProps } from './Preview';
import Preview from './Preview';
import PreviewGroup, { context } from './PreviewGroup';
import type { IDialogPropTypes } from 'rc-dialog/lib/IDialogPropTypes';
import ImageErrorOutlined from '../../_assets/ImageErrorOutlined';
import Loading from '../../_assets/Loading';
import classNames from 'classnames';
import Dropdown from '../../dropdown';
import Menu from '../../menu';
import MoreOutlined from '../../_assets/MoreOutlined';

export interface ImagePreviewType
  extends Omit<
    IDialogPropTypes,
    'mask' | 'visible' | 'closable' | 'prefixCls' | 'onClose' | 'afterClose' | 'wrapClassName'
  > {
  src?: string;
  visible?: boolean;
  onVisibleChange?: (value: boolean, prevValue: boolean) => void;
  getContainer?: GetContainer | false;
  mask?: React.ReactNode;
  maskClassName?: string;
  icons?: PreviewProps['icons'];
}

let uuid = 0;

export interface ImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'placeholder' | 'onClick'> {
  // Original
  src?: string;
  wrapperClassName?: string;
  wrapperStyle?: React.CSSProperties;
  prefixCls?: string;
  previewPrefixCls?: string;
  placeholder?: React.ReactNode;
  loader?: React.ReactNode;
  fallback?: string;
  rootClassName?: string;
  preview?: boolean | ImagePreviewType;
  title?: string;
  description?: string;
  actions?: React.ReactNode[];
  actionsCollapse?: boolean;
  footerPosition?: 'inner' | 'outer';
  /** @deprecated Since version 3.2.1 */
  onPreviewClose?: (value: boolean, prevValue: boolean) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

interface CompoundedComponent<P> extends React.FC<P> {
  PreviewGroup: typeof PreviewGroup;
}

type ImageStatus = 'normal' | 'error' | 'loading';

const ImageInternal: CompoundedComponent<ImageProps> = ({
  src: imgSrc,
  alt,
  onPreviewClose: onInitialPreviewClose,
  prefixCls = 'rc-image',
  previewPrefixCls = `${prefixCls}-preview`,
  placeholder,
  loader,
  fallback,
  width,
  height,
  style,
  preview = true,
  title,
  description,
  actions,
  footerPosition = 'inner',
  actionsCollapse,
  className,
  onClick,
  onError: onImageError,
  wrapperClassName,
  wrapperStyle,
  rootClassName,

  // Img
  crossOrigin,
  decoding,
  loading,
  referrerPolicy,
  sizes,
  srcSet,
  useMap,
  ...otherProps
}) => {
  const isCustomPlaceholder = placeholder && placeholder !== true;
  const isNeedLoading = !!loader || isCustomPlaceholder;
  const isCaption = title || description || (Array.isArray(actions) && actions.length);

  const {
    src: previewSrc,
    visible: previewVisible = undefined,
    onVisibleChange: onPreviewVisibleChange = onInitialPreviewClose,
    getContainer: getPreviewContainer = undefined,
    mask: previewMask,
    maskClassName,
    icons,
    ...dialogProps
  }: ImagePreviewType = typeof preview === 'object' ? preview : {};
  const src = previewSrc ?? imgSrc;
  const isControlled = previewVisible !== undefined;
  const [isShowPreview, setShowPreview] = useMergedState(!!previewVisible, {
    value: previewVisible,
    onChange: onPreviewVisibleChange,
  });
  const [status, setStatus] = useState<ImageStatus>(isNeedLoading ? 'loading' : 'normal');
  const [showImg, setShowImg] = useState(false);
  const [mousePosition, setMousePosition] = useState<null | { x: number; y: number }>(null);
  const isLoading = status === 'loading';
  const isError = status === 'error';

  const isPlaceholder = placeholder === true && !imgSrc && !isError;

  const {
    isPreviewGroup,
    setCurrent,
    setShowPreview: setGroupShowPreview,
    setMousePosition: setGroupMousePosition,
    registerImage,
  } = React.useContext(context);
  const [currentId] = React.useState<number>(() => {
    uuid += 1;
    return uuid;
  });

  const canPreview = preview && !isError && !isLoading && imgSrc;
  const isLoaded = React.useRef(false);

  const onLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setStatus('normal');
    setShowImg(true);
  };

  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (onImageError) {
      onImageError(e);
    }
    setStatus('error');
    setShowImg(false);
  };

  const onPreview: React.MouseEventHandler<HTMLDivElement> = e => {
    if (!isControlled) {
      const { left, top } = getOffset(e.target);

      if (isPreviewGroup) {
        setCurrent(currentId);
        setGroupMousePosition({
          x: left,
          y: top,
        });
      } else {
        setMousePosition({
          x: left,
          y: top,
        });
      }
    }

    if (isPreviewGroup) {
      setGroupShowPreview(true);
    } else {
      setShowPreview(true);
    }

    if (onClick) onClick(e);
  };

  const onPreviewClose = (e: React.SyntheticEvent<Element>) => {
    e.stopPropagation();
    setShowPreview(false);
    if (!isControlled) {
      setMousePosition(null);
    }
  };

  const onClickFooter: React.MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
  };

  // Keep order start
  // Resolve https://github.com/ant-design/ant-design/issues/28881
  // Only need unRegister when component unMount
  React.useEffect(() => {
    const unRegister = registerImage(currentId, src);
    return unRegister;
  }, []);

  React.useEffect(() => {
    registerImage(currentId, src, canPreview);
  }, [src, canPreview]);
  // Keep order end

  const getImgRef = (img?: HTMLImageElement) => {
    isLoaded.current = false;
    if (status !== 'loading') return;
    if (img?.complete && (img.naturalWidth || img.naturalHeight)) {
      isLoaded.current = true;
      onLoad();
    }
  };

  React.useEffect(() => {
    if (isError) {
      setStatus('normal');
    }
    if (isNeedLoading && !isLoaded.current) {
      setStatus('loading');
    }
  }, [imgSrc]);

  const wrapperClass = cn(prefixCls, wrapperClassName, rootClassName, {
    [`${prefixCls}-loading`]: isLoading,
    [`${prefixCls}-reloading`]: isLoading && showImg,
    [`${prefixCls}-error`]: isError && !fallback,
    [`${prefixCls}-fallback`]: isError && fallback,
    [`${prefixCls}-${footerPosition}`]: footerPosition && isCaption,
  });

  const mergedSrc = isError && fallback ? fallback : src;
  const imgCommonProps = {
    crossOrigin,
    decoding,
    loading,
    referrerPolicy,
    sizes,
    srcSet,
    useMap,
    alt,
    className: cn(`${prefixCls}-img`, className),
    style: {
      height,
      ...style,
      visibility: !showImg && !(isError && fallback) && 'hidden',
    },
  };

  const renderActions = React.useMemo(() => {
    return actionsCollapse
      ? [
          <Dropdown
            overlay={
              <div className={`${prefixCls}-actions-list`}>
                {actions.map((item, index) => (
                  <div key={index} className={`${prefixCls}-actions-item`}>
                    {item}
                  </div>
                ))}
              </div>
            }
            trigger={['click']}
            overlayClassName={`${prefixCls}-actions-dropdown`}
          >
            <MoreOutlined />
          </Dropdown>,
        ]
      : actions;
  }, [actions, actionsCollapse]);

  return (
    <>
      <div
        {...otherProps}
        className={wrapperClass}
        onClick={canPreview ? onPreview : onClick}
        style={{
          width,
          height,
          ...wrapperStyle,
        }}
      >
        <img
          {...imgCommonProps}
          ref={getImgRef}
          {...(isError && fallback
            ? {
                src: fallback,
              }
            : { onLoad, onError, src: imgSrc })}
        />

        {showImg && isCaption && (
          <div className={`${prefixCls}-footer`} onClick={onClickFooter}>
            {!!(title || description) && (
              <div className={`${prefixCls}-caption`}>
                {title && <div className={`${prefixCls}-caption-title`}>{title}</div>}
                {description && (
                  <div className={`${prefixCls}-caption-description`}>{description}</div>
                )}
              </div>
            )}
            {Array.isArray(actions) && actions.length && (
              <div className={`${prefixCls}-actions`}>
                <div className={`${prefixCls}-actions-list`}>
                  {renderActions.map((item, index) => {
                    return (
                      <div
                        className={classNames(`${prefixCls}-actions-item`, {
                          [`${prefixCls}-actions-trigger`]: actionsCollapse,
                        })}
                        key={index}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {isError && !fallback && (
          <div aria-hidden="true" className={classNames(`${prefixCls}-error-overlay`)}>
            <ImageErrorOutlined className={`${prefixCls}-error-icon`} />
            {!!alt && <span className={`${prefixCls}-error-alt`}>{alt}</span>}
          </div>
        )}
        {isLoading && (
          <div
            aria-hidden="true"
            className={classNames(`${prefixCls}-loader`, {
              [`${prefixCls}-placeholder`]: isCustomPlaceholder,
            })}
          >
            {isCustomPlaceholder ? placeholder : loader === true ? <Loading /> : loader}
          </div>
        )}
        {isPlaceholder && <div aria-hidden="true" className={`${prefixCls}-img-placeholder`} />}

        {/* Preview Click Mask */}
        {previewMask && canPreview && (
          <div className={cn(`${prefixCls}-mask`, maskClassName)}>{previewMask}</div>
        )}
      </div>
      {!isPreviewGroup && canPreview && (
        <Preview
          aria-hidden={!isShowPreview}
          visible={isShowPreview}
          prefixCls={previewPrefixCls}
          onClose={onPreviewClose}
          mousePosition={mousePosition}
          src={mergedSrc}
          alt={alt}
          getContainer={getPreviewContainer}
          icons={icons}
          rootClassName={rootClassName}
          {...dialogProps}
        />
      )}
    </>
  );
};

ImageInternal.PreviewGroup = PreviewGroup;

ImageInternal.displayName = 'Image';

export default ImageInternal;
