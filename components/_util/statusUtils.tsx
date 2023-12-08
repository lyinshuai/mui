import React from 'react';
import classNames from 'classnames';
import CheckCircleFilled from '../_assets/CheckCircleFilled';
import ExclamationCircleFilled from '../_assets/ExclamationCircleFilled';
import CloseCircleFilled from '../_assets/CloseCircleFilled';
import LoadingIcon from '../_assets/Loading';
import { ValidateStatus } from '../form/FormItem';
import { tuple } from './type';

const InputStatuses = tuple('success', 'warning', 'error', '');
export type InputStatus = typeof InputStatuses[number];

const iconMap = {
  success: CheckCircleFilled,
  warning: ExclamationCircleFilled,
  error: CloseCircleFilled,
  validating: LoadingIcon,
};

export const getFeedbackIcon = (prefixCls: string, status?: ValidateStatus) => {
  const IconNode = status && iconMap[status];
  return IconNode ? (
    <span className={`${prefixCls}-feedback-icon`}>
      <IconNode />
    </span>
  ) : null;
};

export function getStatusClassNames(
  prefixCls: string,
  status?: ValidateStatus,
  hasFeedback?: boolean,
  isSpecified?: boolean,
) {
  return classNames({
    [`${prefixCls}-status-success`]: status === 'success',
    [`${prefixCls}-status-warning`]: status === 'warning',
    [`${prefixCls}-status-error`]: status === 'error',
    [`${prefixCls}-status-validating`]: status === 'validating',
    [`${prefixCls}-has-feedback`]: hasFeedback,
    [`${prefixCls}-specified-status`]: isSpecified,
  });
}

export const getMergedStatus = (contextStatus?: ValidateStatus, customStatus?: InputStatus) =>
  customStatus || contextStatus;
