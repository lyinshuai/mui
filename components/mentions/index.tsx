import * as React from 'react';
import classNames from 'classnames';
import RcMentions from './rc-mentions';
import { MentionsProps as RcMentionsProps } from './rc-mentions/Mentions';
import { composeRef } from 'rc-util/lib/ref';
import MLoadingIcon from '../_assets/Loading';
import { ConfigContext } from '../config-provider';
import { FormItemStatusContext } from '../form/context';
import {
  getFeedbackIcon,
  getMergedStatus,
  getStatusClassNames,
  InputStatus,
} from '../_util/statusUtils';

export const { Option } = RcMentions;

function loadingFilterOption() {
  return true;
}

export type MentionPlacement = 'top' | 'bottom';

export interface OptionProps {
  value: string;
  children: React.ReactNode;

  [key: string]: any;
}

export interface MentionProps extends RcMentionsProps {
  loading?: boolean;
  status?: InputStatus;
}

export interface MentionState {
  focused: boolean;
}

interface MentionsConfig {
  prefix?: string | string[];
  split?: string;
}

interface MentionsEntity {
  prefix: string;
  value: string;
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<MentionProps & React.RefAttributes<HTMLElement>> {
  Option: typeof Option;
  getMentions: (value: string, config?: MentionsConfig) => MentionsEntity[];
}


const InternalMentions: React.ForwardRefRenderFunction<unknown, MentionProps> = (
  {
    prefixCls: customizePrefixCls,
    className,
    disabled,
    loading,
    filterOption,
    children,
    notFoundContent,
    status: customStatus,
    readOnly,
    ...restProps
  },
  ref,
) => {
  const [focused, setFocused] = React.useState(false);
  const innerRef = React.useRef<HTMLElement>();
  const mergedRef = composeRef(ref, innerRef);
  const { getPrefixCls, renderEmpty, direction } = React.useContext(ConfigContext);
  const { status: contextStatus, hasFeedback, isSpecified } = React.useContext(FormItemStatusContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  const mergedIsSpecified = isSpecified || customStatus !== undefined;


  const onFocus: React.FocusEventHandler<HTMLTextAreaElement> = (...args) => {
    if (restProps.onFocus) {
      restProps.onFocus(...args);
    }
    setFocused(true);
  };

  const onBlur: React.FocusEventHandler<HTMLTextAreaElement> = (...args) => {
    if (restProps.onBlur) {
      restProps.onBlur(...args);
    }
    setFocused(false);
  };

  const getNotFoundContent = () => {
    if (notFoundContent !== undefined) {
      return notFoundContent;
    }

    return renderEmpty('Select');
  };

  const getOptions = () => {
    if (loading) {
      return (
        <Option value='ANTD_SEARCHING' disabled className={'loading-center'}>
          <MLoadingIcon />
        </Option>
      );
    }
    return children;
  };

  const getFilterOption = (): any => {
    if (loading) {
      return loadingFilterOption;
    }
    return filterOption;
  };

  const prefixCls = getPrefixCls('mentions', customizePrefixCls);

  const mergedClassName = classNames(
    {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-readonly`]: readOnly,
      [`${prefixCls}-focused`]: !readOnly && focused,
      [`${prefixCls}-rtl`]: direction === 'rtl',
    },
    getStatusClassNames(prefixCls, mergedStatus, undefined, mergedIsSpecified),
    !hasFeedback && className,
  );


  const mentions = (
    <RcMentions
      prefixCls={prefixCls}
      notFoundContent={getNotFoundContent()}
      className={mergedClassName}
      disabled={disabled}
      direction={direction}
      {...restProps}
      filterOption={getFilterOption()}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={mergedRef as any}
    >
      {getOptions()}
    </RcMentions>
  );

  if (hasFeedback) {
    return (
      <div
        className={classNames(
          `${prefixCls}-affix-wrapper`,
          getStatusClassNames(`${prefixCls}-affix-wrapper`, mergedStatus, hasFeedback, mergedIsSpecified),
          className,
        )}
      >
        {mentions}
        {getFeedbackIcon(prefixCls, mergedStatus)}
      </div>
    );
  }

  return mentions;
};

const Mentions = React.forwardRef<unknown, MentionProps>(InternalMentions) as CompoundedComponent;
Mentions.displayName = 'Mentions';
Mentions.Option = Option;

Mentions.getMentions = (value: string = '', config: MentionsConfig = {}): MentionsEntity[] => {
  const { prefix = '@', split = ' ' } = config;
  const prefixList: string[] = Array.isArray(prefix) ? prefix : [prefix];

  return value
    .split(split)
    .map((str = ''): MentionsEntity | null => {
      let hitPrefix: string | null = null;

      prefixList.some(prefixStr => {
        const startStr = str.slice(0, prefixStr.length);
        if (startStr === prefixStr) {
          hitPrefix = prefixStr;
          return true;
        }
        return false;
      });

      if (hitPrefix !== null) {
        return {
          prefix: hitPrefix,
          value: str.slice((hitPrefix as string).length),
        };
      }
      return null;
    })
    .filter((entity): entity is MentionsEntity => !!entity && !!entity.value);
};

export default Mentions;
