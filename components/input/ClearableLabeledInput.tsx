import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import classNames from 'classnames';
import * as React from 'react';
import { DirectionType } from '../config-provider';
import { SizeType } from '../config-provider/SizeContext';
import { FormItemStatusContext, FormItemStatusContextProps } from '../form/context';
import { cloneElement } from '../_util/reactNode';
import { getMergedStatus, getStatusClassNames, InputStatus } from '../_util/statusUtils';
import { tuple } from '../_util/type';
import type { InputProps } from './Input';

const ClearableInputType = tuple('text', 'input');

function hasAddon(props: InputProps | ClearableInputProps) {
  return !!(props.addonBefore || props.addonAfter);
}

/** This basic props required for input and textarea. */
interface BasicProps {
  prefixCls: string;
  inputType: typeof ClearableInputType[number];
  value?: any;
  allowClear?: boolean;
  element: React.ReactElement;
  handleReset: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  direction?: DirectionType;
  focused?: boolean;
  readOnly?: boolean;
  bordered: boolean;
  hidden?: boolean;
}

/** This props only for input. */
export interface ClearableInputProps extends BasicProps {
  size?: SizeType;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  triggerFocus?: () => void;
  status?: InputStatus;
}

class ClearableLabeledInput extends React.Component<ClearableInputProps> {
  renderClearIcon(prefixCls: string) {
    const { value, disabled, readOnly, handleReset, suffix } = this.props;
    const needClear = !disabled && !readOnly && value;
    const className = `${prefixCls}-clear-icon`;
    return (
      <CloseCircleFilled
        onClick={handleReset}
        // Do not trigger onBlur when clear input
        // https://github.com/ant-design/ant-design/issues/31200
        onMouseDown={e => e.preventDefault()}
        className={classNames(
          {
            [`${className}-hidden`]: !needClear,
            [`${className}-has-suffix`]: !!suffix,
          },
          className,
        )}
        role="button"
      />
    );
  }

  renderTextAreaWithClearIcon(
    prefixCls: string,
    element: React.ReactElement,
    statusContext: FormItemStatusContextProps,
  ) {
    const {
      value,
      allowClear,
      className,
      style,
      direction,
      bordered,
      hidden,
      status: customStatus,
    } = this.props;

    const { status: contextStatus, hasFeedback, isSpecified } = statusContext;
    const mergedIsSpecified = isSpecified || customStatus !== undefined;

    if (!allowClear) {
      return cloneElement(element, {
        value,
      });
    }
    const affixWrapperCls = classNames(
      `${prefixCls}-affix-wrapper`,
      `${prefixCls}-affix-wrapper-textarea-with-clear-btn`,
      getStatusClassNames(
        `${prefixCls}-affix-wrapper`,
        getMergedStatus(contextStatus, customStatus),
        hasFeedback,
        mergedIsSpecified,
      ),
      {
        [`${prefixCls}-affix-wrapper-rtl`]: direction === 'rtl',
        [`${prefixCls}-affix-wrapper-borderless`]: !bordered,
        // className will go to addon wrapper
        [`${className}`]: !hasAddon(this.props) && className,
      },
    );
    return (
      <span className={affixWrapperCls} style={style} hidden={hidden}>
        {cloneElement(element, {
          style: null,
          value,
        })}
        {this.renderClearIcon(prefixCls)}
      </span>
    );
  }

  render() {
    return (
      <FormItemStatusContext.Consumer>
        {statusContext => {
          const { prefixCls, inputType, element } = this.props;
          if (inputType === ClearableInputType[0]) {
            return this.renderTextAreaWithClearIcon(prefixCls, element, statusContext);
          }
        }}
      </FormItemStatusContext.Consumer>
    );
  }
}

export default ClearableLabeledInput;
