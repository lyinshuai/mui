import * as React from 'react';
import classNames from 'classnames';
import RCNotification from 'rc-notification';
import {
  NotificationInstance as RCNotificationInstance,
  NoticeContent,
} from 'rc-notification/lib/Notification';
import InfoCircleFilled from '../_assets/InfoCircleFilled';
import ExclamationCircleFilled from '../_assets/ExclamationCircleFilled';
import CheckCircleFilled from '../_assets/CheckCircleFilled'
import CloseCircleFilled from '../_assets/CloseCircleFilled'
import LoadingIcon from '../_assets/Loading';
import createUseMessage from './hooks/useMessage';
import ConfigProvider, { globalConfig } from '../config-provider';
import CloseOutlined from '../_assets/CloseOutlined3';

let messageInstance: RCNotificationInstance | null;
let defaultDuration = 3;
let defaultTop: number;
let key = 1;
let localPrefixCls = '';
let transitionName = 'move-up';
let hasTransitionName = false;
let getContainer: () => HTMLElement;
let maxCount: number;
let rtl = false;
let defaultCloseIcon: boolean | React.ReactNode = false;

export function getKeyThenIncreaseKey() {
  return key++;
}

export interface ConfigOptions {
  top?: number;
  duration?: number;
  prefixCls?: string;
  getContainer?: () => HTMLElement;
  transitionName?: string;
  maxCount?: number;
  rtl?: boolean;
  closeIcon?: boolean | React.ReactNode;
}

function setMessageConfig(options: ConfigOptions) {
  if (options.top !== undefined) {
    defaultTop = options.top;
    messageInstance = null; // delete messageInstance for new defaultTop
  }
  if (options.duration !== undefined) {
    defaultDuration = options.duration;
  }

  if (options.prefixCls !== undefined) {
    localPrefixCls = options.prefixCls;
  }
  if (options.getContainer !== undefined) {
    getContainer = options.getContainer;
    messageInstance = null; // delete messageInstance for new getContainer
  }
  if (options.transitionName !== undefined) {
    transitionName = options.transitionName;
    messageInstance = null; // delete messageInstance for new transitionName
    hasTransitionName = true;
  }
  if (options.maxCount !== undefined) {
    maxCount = options.maxCount;
    messageInstance = null;
  }
  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
  if (options.closeIcon !== undefined) {
    defaultCloseIcon = options.closeIcon;
  }
}

function getRCNotificationInstance(
  args: ArgsProps,
  callback: (info: {
    prefixCls: string;
    rootPrefixCls: string;
    iconPrefixCls: string;
    instance: RCNotificationInstance;
  }) => void,
) {
  const { prefixCls: customizePrefixCls, getPopupContainer: getContextPopupContainer } = args;
  const { getPrefixCls, getRootPrefixCls, getIconPrefixCls } = globalConfig();
  const prefixCls = getPrefixCls('message', customizePrefixCls || localPrefixCls);
  const rootPrefixCls = getRootPrefixCls(args.rootPrefixCls, prefixCls);
  const iconPrefixCls = getIconPrefixCls();

  if (messageInstance) {
    callback({ prefixCls, rootPrefixCls, iconPrefixCls, instance: messageInstance });
    return;
  }

  const instanceConfig = {
    prefixCls,
    transitionName: hasTransitionName ? transitionName : `${rootPrefixCls}-${transitionName}`,
    style: { top: defaultTop }, // 覆盖原来的样式
    getContainer: getContainer || getContextPopupContainer,
    maxCount,
  };

  RCNotification.newInstance(instanceConfig, (instance: any) => {
    if (messageInstance) {
      callback({ prefixCls, rootPrefixCls, iconPrefixCls, instance: messageInstance });
      return;
    }
    messageInstance = instance;

    if (process.env.NODE_ENV === 'test') {
      (messageInstance as any).config = instanceConfig;
    }

    callback({ prefixCls, rootPrefixCls, iconPrefixCls, instance });
  });
}

export interface ThenableArgument {
  (val: any): void;
}

export interface MessageType extends PromiseLike<any> {
  (): void;
}

const typeToIcon = {
  info: InfoCircleFilled,
  success: CheckCircleFilled,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled,
  loading: LoadingIcon,
};

export type NoticeType = keyof typeof typeToIcon;

export const typeList = Object.keys(typeToIcon) as NoticeType[];

export interface ArgsProps {
  content: React.ReactNode;
  duration?: number;
  type: NoticeType;
  prefixCls?: string;
  rootPrefixCls?: string;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  onClose?: () => void;
  icon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  key?: string | number;
  style?: React.CSSProperties;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function renderTypeIcon(typeIcon: React.ReactNode, prefixCls?: string, type?: NoticeType) {
  const IconComponent = type ? typeToIcon[type] : '';
  typeIcon = typeIcon || (IconComponent && <IconComponent />);
  return typeIcon ? <span className={`${prefixCls}-type`}>{typeIcon}</span> : null;
}

function renderCloseIcon(closeIcon: React.ReactNode, prefixCls?: string, close?: () => void) {
  closeIcon = closeIcon !== undefined ? closeIcon : defaultCloseIcon;
  const isDefaultIcon = closeIcon === true;
  closeIcon = isDefaultIcon ? <CloseOutlined /> : closeIcon;
  return closeIcon ? (
    <span className={`${prefixCls}-close`}>
      <span
        className={`${prefixCls}-close-${isDefaultIcon ? 'default' : 'custom'}`}
        onClick={close}
      >
        {closeIcon}
      </span>
    </span>
  ) : null;
}

function getRCNoticeProps(
  args: ArgsProps,
  prefixCls: string,
  iconPrefixCls?: string,
  close?: () => void,
): NoticeContent {
  const duration = args.duration !== undefined ? args.duration : defaultDuration;
  const typeCls = `${prefixCls}-${args.type}`;
  const messageClass = classNames(`${prefixCls}-custom-content`, {
    [`${prefixCls}-rtl`]: rtl === true,
  });
  return {
    key: args.key,
    duration,
    style: args.style || {},
    className: classNames(args.className, args.type ? typeCls : undefined),
    content: (
      <ConfigProvider iconPrefixCls={iconPrefixCls}>
        <div className={messageClass}>
          {renderTypeIcon(args.icon, prefixCls, args.type)}
          <span
            className={`${prefixCls}-text`}
            title={typeof args.content === 'string' ? args.content : ''}
          >
            {args.content}
          </span>
          {renderCloseIcon(args.closeIcon, prefixCls, close)}
        </div>
      </ConfigProvider>
    ),
    onClose: args.onClose,
    onClick: args.onClick,
  };
}

function notice(args: ArgsProps): MessageType {
  const target = args.key || getKeyThenIncreaseKey();
  const result: any = () => {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };
  const closePromise = new Promise(resolve => {
    const callback = () => {
      if (typeof args.onClose === 'function') {
        args.onClose();
      }
      return resolve(true);
    };

    getRCNotificationInstance(args, ({ prefixCls, iconPrefixCls, instance }) => {
      instance.notice(
        getRCNoticeProps(
          { ...args, key: target, onClose: callback },
          prefixCls,
          iconPrefixCls,
          result,
        ),
      );
    });
  });
  result.then = (filled: ThenableArgument, rejected: ThenableArgument) =>
    closePromise.then(filled, rejected);
  result.promise = closePromise;
  return result;
}

type ConfigContent = React.ReactNode;
type ConfigDuration = number | (() => void);
type JointContent = ConfigContent | ArgsProps;
export type ConfigOnClose = () => void;

function isArgsProps(content: JointContent): content is ArgsProps {
  return (
    Object.prototype.toString.call(content) === '[object Object]' &&
    !!(content as ArgsProps).content
  );
}

const api: any = {
  open: notice,
  config: setMessageConfig,
  destroy(messageKey?: React.Key) {
    if (messageInstance) {
      if (messageKey) {
        const { removeNotice } = messageInstance;
        removeNotice(messageKey);
      } else {
        const { destroy } = messageInstance;
        destroy();
        messageInstance = null;
      }
    }
  },
};

export function attachTypeApi(originalApi: MessageApi, type: NoticeType) {
  originalApi[type] = (
    content: JointContent,
    duration?: ConfigDuration,
    onClose?: ConfigOnClose,
  ) => {
    if (isArgsProps(content)) {
      return originalApi.open({ ...content, type });
    }

    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }

    return originalApi.open({ content, duration, type, onClose });
  };
}

typeList.forEach(type => attachTypeApi(api, type));

api.warn = api.warning;
api.useMessage = createUseMessage(getRCNotificationInstance, getRCNoticeProps);

export interface MessageInstance {
  info(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  success(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  error(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  warning(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  loading(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  open(args: ArgsProps): MessageType;
}

export interface MessageApi extends MessageInstance {
  warn(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  config(options: ConfigOptions): void;
  destroy(messageKey?: React.Key): void;
  useMessage(): [MessageInstance, React.ReactElement];
}

/** @private test Only function. Not work on production */
export const getInstance = () => (process.env.NODE_ENV === 'test' ? messageInstance : null);

export default api as MessageApi;
