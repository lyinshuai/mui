// @ts-nocheck

import * as React from 'react';
import type { DialogProps as IDialogPropTypes } from 'rc-dialog';
import Dialog from 'rc-dialog';
import classnames from 'classnames';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import KeyCode from 'rc-util/lib/KeyCode';
import { warning } from 'rc-util/lib/warning';
import useFrameSetState from './hooks/useFrameSetState';
import getFixScaleEleTransPosition from './getFixScaleEleTransPosition';
import { context } from './PreviewGroup';
import Dropdown from '../../dropdown';
import Menu from '../../menu';

const { useState, useEffect, useCallback, useRef, useContext } = React;

export interface PreviewProps extends Omit<IDialogPropTypes, 'onClose'> {
  onClose?: (e: React.SyntheticEvent<Element>) => void;
  src?: string;
  alt?: string;
  rootClassName?: string;
  icons?: {
    rotateLeft?: React.ReactNode;
    rotateRight?: React.ReactNode;
    zoomIn?: React.ReactNode;
    zoomOut?: React.ReactNode;
    close?: React.ReactNode;
    left?: React.ReactNode;
    right?: React.ReactNode;
  };
  countRender?: (current: number, total: number) => string;
}

const initialPosition = {
  x: 0,
  y: 0,
};

const initIndex = 7;
const scaleArr = [0.25, 0.33, 0.5, 0.67, 0.75, 0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5];
const scaleOption = [0.25, 0.5, 0.75, 1, 1.5, 2].reverse();

const Preview: React.FC<PreviewProps> = props => {
  const {
    prefixCls,
    src,
    alt,
    onClose,
    afterClose,
    visible,
    icons = {},
    rootClassName,
    countRender,
    ...restProps
  } = props;
  const { rotateLeft, rotateRight, zoomIn, zoomOut, close, left, right } = icons;
  const [scaleIndex, setScaleIndex] = useState(initIndex);
  const [scale, setScale] = useState(scaleArr[scaleIndex]);
  const [rotate, setRotate] = useState(0);
  const [position, setPosition] = useFrameSetState<{
    x: number;
    y: number;
  }>(initialPosition);
  const imgRef = useRef<HTMLImageElement>();
  const originPositionRef = useRef<{
    originX: number;
    originY: number;
    deltaX: number;
    deltaY: number;
  }>({
    originX: 0,
    originY: 0,
    deltaX: 0,
    deltaY: 0,
  });
  const [isMoving, setMoving] = useState(false);
  const { previewUrls, current, isPreviewGroup, setCurrent } = useContext(context);
  const previewGroupCount = previewUrls.size;
  const previewUrlsKeys = Array.from(previewUrls.keys());
  const currentPreviewIndex = previewUrlsKeys.indexOf(current);
  const combinationSrc = isPreviewGroup ? previewUrls.get(current) : src;
  const showLeftOrRightSwitches = isPreviewGroup && previewGroupCount > 1;
  const [lastWheelZoomDirection, setLastWheelZoomDirection] = useState({ wheelDirection: 0 });

  const onAfterClose = () => {
    setScaleIndex(initIndex)
    setRotate(0);
    setPosition(initialPosition);
  };

  useEffect(() => {
    setScale(scaleArr[scaleIndex]);
  }, [scaleIndex]);

  const onZoomIn = () => {
    setScaleIndex(prev => {
      let nextIndex = scaleIndex + 1;
      if (nextIndex >= scaleArr.length - 1) {
        nextIndex = scaleArr.length - 1;
      }
      return nextIndex;
    });
    setPosition(initialPosition);
  };

  const onZoomOut = () => {
    setScaleIndex(prev => {
      let nextIndex = scaleIndex - 1;
      if (nextIndex <= 0) {
        nextIndex = 0;
      }
      return nextIndex;
    });
    setPosition(initialPosition);
  };

  const onRotateRight = () => {
    setRotate(value => value + 90);
  };

  const onRotateLeft = () => {
    setRotate(value => value - 90);
  };

  const onSwitchLeft: React.MouseEventHandler<HTMLDivElement> = event => {
    event.preventDefault();
    // Without this mask close will abnormal
    event.stopPropagation();
    if (currentPreviewIndex > 0) {
      setCurrent(previewUrlsKeys[currentPreviewIndex - 1]);
    }
  };

  const onSwitchRight: React.MouseEventHandler<HTMLDivElement> = event => {
    event.preventDefault();
    // Without this mask close will abnormal
    event.stopPropagation();
    if (currentPreviewIndex < previewGroupCount - 1) {
      setCurrent(previewUrlsKeys[currentPreviewIndex + 1]);
    }
  };

  const wrapClassName = classnames({
    [`${prefixCls}-moving`]: isMoving,
  });
  const toolClassName = `${prefixCls}-operations-operation`;
  const iconClassName = `${prefixCls}-operations-icon`;

  const onMouseUp: React.MouseEventHandler<HTMLBodyElement> = () => {
    if (visible && isMoving) {
      const width = imgRef.current.offsetWidth * scale;
      const height = imgRef.current.offsetHeight * scale;
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { left, top } = imgRef.current.getBoundingClientRect();
      const isRotate = rotate % 180 !== 0;

      setMoving(false);

      const fixState = getFixScaleEleTransPosition(
        isRotate ? height : width,
        isRotate ? width : height,
        left,
        top,
      );

      if (fixState) {
        setPosition({ ...fixState });
      }
    }
  };

  const onMouseDown: React.MouseEventHandler<HTMLDivElement> = event => {
    // Only allow main button
    if (event.button !== 0) return;
    event.preventDefault();
    // Without this mask close will abnormal
    event.stopPropagation();
    originPositionRef.current.deltaX = event.pageX - position.x;
    originPositionRef.current.deltaY = event.pageY - position.y;
    originPositionRef.current.originX = position.x;
    originPositionRef.current.originY = position.y;
    setMoving(true);
  };

  const onMouseMove: React.MouseEventHandler<HTMLBodyElement> = event => {
    if (visible && isMoving) {
      setPosition({
        x: event.pageX - originPositionRef.current.deltaX,
        y: event.pageY - originPositionRef.current.deltaY,
      });
    }
  };

  const onWheelMove: React.WheelEventHandler<HTMLBodyElement> = event => {
    if (!visible) return;
    event.preventDefault();
    const wheelDirection = event.deltaY;
    setLastWheelZoomDirection({ wheelDirection });
  };

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!visible || !showLeftOrRightSwitches) return;

      event.preventDefault();
      if (event.keyCode === KeyCode.LEFT) {
        if (currentPreviewIndex > 0) {
          setCurrent(previewUrlsKeys[currentPreviewIndex - 1]);
        }
      } else if (event.keyCode === KeyCode.RIGHT) {
        if (currentPreviewIndex < previewGroupCount - 1) {
          setCurrent(previewUrlsKeys[currentPreviewIndex + 1]);
        }
      }
    },
    [
      currentPreviewIndex,
      previewGroupCount,
      previewUrlsKeys,
      setCurrent,
      showLeftOrRightSwitches,
      visible,
    ],
  );

  const onDoubleClick = () => {
    if (visible) {
      if (scale !== 1) {
        setScale(1);
      }
      if (position.x !== initialPosition.x || position.y !== initialPosition.y) {
        setPosition(initialPosition);
      }
    }
  };

  useEffect(() => {
    const { wheelDirection } = lastWheelZoomDirection;
    if (wheelDirection > 0) {
      onZoomOut();
    } else if (wheelDirection < 0) {
      onZoomIn();
    }
  }, [lastWheelZoomDirection]);

  useEffect(() => {
    let onTopMouseUpListener;
    let onTopMouseMoveListener;

    const onMouseUpListener = addEventListener(window, 'mouseup', onMouseUp, false);
    const onMouseMoveListener = addEventListener(window, 'mousemove', onMouseMove, false);
    const onScrollWheelListener = addEventListener(window, 'wheel', onWheelMove, {
      passive: false,
    });
    const onKeyDownListener = addEventListener(window, 'keydown', onKeyDown, false);

    try {
      // Resolve if in iframe lost event
      /* istanbul ignore next */
      if (window.top !== window.self) {
        onTopMouseUpListener = addEventListener(window.top, 'mouseup', onMouseUp, false);
        onTopMouseMoveListener = addEventListener(window.top, 'mousemove', onMouseMove, false);
      }
    } catch (error) {
      /* istanbul ignore next */
      warning(false, `[rc-image] ${error}`);
    }

    return () => {
      onMouseUpListener.remove();
      onMouseMoveListener.remove();
      onScrollWheelListener.remove();
      onKeyDownListener.remove();

      /* istanbul ignore next */
      if (onTopMouseUpListener) onTopMouseUpListener.remove();
      /* istanbul ignore next */
      if (onTopMouseMoveListener) onTopMouseMoveListener.remove();
    };
  }, [visible, isMoving, onKeyDown]);

  const scaleDropMenu = (
    <Menu
      onClick={({ key }) => {
        setScale(key);
      }}
    >
      {scaleOption.map(item => (
        <Menu.Item key={item}>{Number(item * 100).toFixed(0)}%</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dialog
      transitionName="zoom"
      maskTransitionName="fade"
      closable={false}
      keyboard
      prefixCls={prefixCls}
      onClose={onClose}
      afterClose={onAfterClose}
      visible={visible}
      wrapClassName={wrapClassName}
      rootClassName={rootClassName}
      {...restProps}
    >
      <div className={classnames(`${prefixCls}-close-btn`)} onClick={onClose}>
        {React.isValidElement(close) ? React.cloneElement(close) : close}
      </div>
      <div
        className={`${prefixCls}-img-wrapper`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <img
          onMouseDown={onMouseDown}
          onDoubleClick={onDoubleClick}
          ref={imgRef}
          className={`${prefixCls}-img`}
          src={combinationSrc}
          alt={alt}
          style={{
            transform: `scale3d(${scale}, ${scale}, 1) rotate(${rotate}deg)`,
          }}
        />
      </div>
      <div className={`${prefixCls}-dots`}>
        {new Array(previewGroupCount).fill(true).map((item, index) => (
          <span
            key={index}
            className={classnames(`${prefixCls}-dot`, {
              [`${prefixCls}-dot-active`]: currentPreviewIndex === index,
            })}
            onClick={() => {
              setCurrent(previewUrlsKeys[index]);
            }}
          />
        ))}
      </div>
      <ul className={`${prefixCls}-operations`}>
        <li className={toolClassName} onClick={onRotateLeft}>
          {React.isValidElement(rotateLeft)
            ? React.cloneElement(rotateLeft, { className: iconClassName })
            : rotateLeft}
        </li>
        <li className={toolClassName} onClick={onRotateRight}>
          {React.isValidElement(rotateRight)
            ? React.cloneElement(rotateRight, { className: iconClassName })
            : rotateRight}
        </li>
        <li
          className={classnames(toolClassName, {
            [`${prefixCls}-operations-operation-disabled`]: scale <= scaleArr[0],
          })}
          onClick={onZoomOut}
        >
          {React.isValidElement(zoomOut)
            ? React.cloneElement(zoomOut, { className: iconClassName })
            : zoomOut}
        </li>
        <li className={classnames(toolClassName, `${prefixCls}-operations-scale`)}>
          <Dropdown
            overlay={scaleDropMenu}
            trigger={['click']}
            overlayClassName={`${prefixCls}-scale-dropdown`}
          >
            <div>{Number(scale * 100).toFixed(0)}%</div>
          </Dropdown>
        </li>
        <li
          className={classnames(toolClassName, {
            [`${prefixCls}-operations-operation-disabled`]: scale >= scaleArr[scaleArr.length - 1],
          })}
          onClick={onZoomIn}
        >
          {React.isValidElement(zoomIn)
            ? React.cloneElement(zoomIn, { className: iconClassName })
            : zoomIn}
        </li>
      </ul>
      {showLeftOrRightSwitches && (
        <div
          className={classnames(`${prefixCls}-switch-left`, {
            [`${prefixCls}-switch-left-disabled`]: currentPreviewIndex === 0,
          })}
          onClick={onSwitchLeft}
        >
          {left}
        </div>
      )}
      {showLeftOrRightSwitches && (
        <div
          className={classnames(`${prefixCls}-switch-right`, {
            [`${prefixCls}-switch-right-disabled`]: currentPreviewIndex === previewGroupCount - 1,
          })}
          onClick={onSwitchRight}
        >
          {right}
        </div>
      )}
    </Dialog>
  );
};

export default Preview;
