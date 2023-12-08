import * as React from 'react';
import classNames from 'classnames';
import InfoCircleFilled from '../_assets/InfoCircleFilled';
import ExclamationCircleFilled from '../_assets/ExclamationCircleFilled';
import CheckCircleFilled from '../_assets/CheckCircleFilled';
import CloseCircleFilled from '../_assets/CloseCircleFilled';
import LoadingIcon from '../_assets/Loading';

import { ConfigContext } from '../config-provider';
import devWarning from '../_util/devWarning';

import ServerError from '../_assets/ServerError';
import Unauthorized from '../_assets/Unauthorized';
import NotFound from '../_assets/NotFound';

export const IconMap = {
  success: CheckCircleFilled,
  error: CloseCircleFilled,
  info: InfoCircleFilled,
  warning: ExclamationCircleFilled,
  loading: LoadingIcon,
};

export const ExceptionMap = {
  '404': NotFound,
  '500': ServerError,
  '403': Unauthorized,
};

export type ExceptionStatusType = 403 | 404 | 500 | '403' | '404' | '500';
export type ResultStatusType = ExceptionStatusType | keyof typeof IconMap;

export interface ResultProps {
  icon?: React.ReactNode;
  status?: ResultStatusType;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  extra?: React.ReactNode;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

// ExceptionImageMap keys
const ExceptionStatus = Object.keys(ExceptionMap);

/**
 * Render icon if ExceptionStatus includes ,render svg image else render iconNode
 *
 * @param prefixCls
 * @param {status, icon}
 */
const renderIcon = (prefixCls: string, { status, icon }: ResultProps) => {
  const className = classNames(`${prefixCls}-icon`);

  devWarning(
    !(typeof icon === 'string' && icon.length > 2),
    'Result',
    `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${icon}\` at https://ant.design/components/icon`,
  );

  if (ExceptionStatus.includes(`${status}`)) {
    const SVGComponent = ExceptionMap[status as ExceptionStatusType];
    return (
      <div className={`${className} ${prefixCls}-image`}>
        <SVGComponent />
      </div>
    );
  }
  const iconNode = React.createElement(
    IconMap[status as Exclude<ResultStatusType, ExceptionStatusType>],
  );

  return <div className={className}>{icon || iconNode}</div>;
};

const renderExtra = (prefixCls: string, { extra }: ResultProps) =>
  extra && <div className={`${prefixCls}-extra`}>{extra}</div>;

export interface ResultType extends React.FC<ResultProps> {
  PRESENTED_IMAGE_404: React.ReactNode;
  PRESENTED_IMAGE_403: React.ReactNode;
  PRESENTED_IMAGE_500: React.ReactNode;
}

const Result: ResultType = ({
  prefixCls: customizePrefixCls,
  className: customizeClassName,
  subTitle,
  title,
  style,
  children,
  status = 'info',
  icon,
  extra,
}) => {
  const { getPrefixCls, direction } = React.useContext(ConfigContext);

  const prefixCls = getPrefixCls('result', customizePrefixCls);
  const className = classNames(prefixCls, `${prefixCls}-${status}`, customizeClassName, {
    [`${prefixCls}-rtl`]: direction === 'rtl',
  });
  return (
    <div className={className} style={style}>
      {renderIcon(prefixCls, { status, icon })}
      <div className={`${prefixCls}-title`}>{title}</div>
      {subTitle && <div className={`${prefixCls}-subtitle`}>{subTitle}</div>}
      {renderExtra(prefixCls, { extra })}
      {children && <div className={`${prefixCls}-content`}>{children}</div>}
    </div>
  );
};

Result.PRESENTED_IMAGE_403 = ExceptionMap['403'];
Result.PRESENTED_IMAGE_404 = ExceptionMap['404'];
Result.PRESENTED_IMAGE_500 = ExceptionMap['500'];

export default Result;
