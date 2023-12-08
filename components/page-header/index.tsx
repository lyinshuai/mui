import * as React from 'react';
import classNames from 'classnames';
import useState from 'rc-util/lib/hooks/useState';
import ResizeObserver from 'rc-resize-observer';
import ArrowLeftOutlined2 from '../_assets/ArrowLeftOutlined';
import ArrowRightOutlined2 from '../_assets/ArrowRightOutlined2';
import { ConfigConsumer, ConfigConsumerProps, DirectionType } from '../config-provider';
import { TagType } from '../tag';
import Breadcrumb, { BreadcrumbProps } from '../breadcrumb';
import Avatar, { AvatarProps } from '../avatar';
import Space from '../space';
import TransButton from '../_util/transButton';
import LocaleReceiver from '../locale-provider/LocaleReceiver';

export interface PageHeaderProps {
  backIcon?: React.ReactNode;
  backText?: string;
  prefixCls?: string;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  style?: React.CSSProperties;
  breadcrumb?: BreadcrumbProps | React.ReactElement<typeof Breadcrumb>;
  breadcrumbInline?: boolean;
  breadcrumbRender?: (props: PageHeaderProps, defaultDom: React.ReactNode) => React.ReactNode;
  tags?: React.ReactElement<TagType> | React.ReactElement<TagType>[];
  footer?: React.ReactNode;
  extra?: React.ReactNode;
  avatar?: AvatarProps;
  onBack?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
  ghost?: boolean;
}

const renderBack = (
  prefixCls: string,
  backIcon?: React.ReactNode,
  backText?: string,
  onBack?: (e?: React.MouseEvent<HTMLDivElement>) => void,
  breadcrumbInline: boolean = true,
) => {
  if (!backIcon || !onBack) {
    return null;
  }
  return (
    <LocaleReceiver componentName="PageHeader">
      {({ back }: { back: string }) => (
        <div className={`${prefixCls}-back`}>
          <TransButton
            onClick={(e?: React.MouseEvent<HTMLDivElement>) => {
              onBack?.(e);
            }}
            noStyle
            className={`${prefixCls}-back-button`}
            aria-label={back}
          >
            {backIcon}
            {!breadcrumbInline && <span className={`${prefixCls}-back-button-text`}>{backText}</span>}
          </TransButton>
        </div>
      )}
    </LocaleReceiver>
  );
};

const renderBreadcrumb = (breadcrumb: BreadcrumbProps) => <Breadcrumb {...breadcrumb} />;

const getBackIcon = (props: PageHeaderProps, direction: DirectionType = 'ltr') => {
  if (props.backIcon !== undefined) {
    return props.backIcon;
  }
  return direction === 'rtl' ? <ArrowRightOutlined2 /> : <ArrowLeftOutlined2 />;
};

const renderTitle = (
  prefixCls: string,
  props: PageHeaderProps,
  direction: DirectionType = 'ltr',
) => {
  const { title, avatar, subTitle, tags, extra, breadcrumbInline, backText, onBack } = props;
  const headingPrefixCls = `${prefixCls}-heading`;
  const hasHeading = title || subTitle || tags || extra;
  // If there is nothing, return a null
  if (!hasHeading) {
    return null;
  }
  const backIcon = getBackIcon(props, direction);
  const backIconDom = breadcrumbInline ? renderBack(prefixCls, backIcon, backText, onBack) : null;

  const hasTitle = backIconDom || avatar || hasHeading;
  return (
    <div className={headingPrefixCls}>
      {hasTitle && (
        <div className={`${headingPrefixCls}-left`}>
          {backIconDom}
          {avatar && <Avatar {...avatar} />}
          {title && (
            <span
              className={`${headingPrefixCls}-title`}
              title={typeof title === 'string' ? title : undefined}
            >
              {title}
            </span>
          )}
          {subTitle && (
            <span
              className={`${headingPrefixCls}-sub-title`}
              title={typeof subTitle === 'string' ? subTitle : undefined}
            >
              {subTitle}
            </span>
          )}
          {tags && <span className={`${headingPrefixCls}-tags`}>{tags}</span>}
        </div>
      )}
      {extra && (
        <span className={`${headingPrefixCls}-extra`}>
          <Space>{extra}</Space>
        </span>
      )}
    </div>
  );
};

const renderFooter = (prefixCls: string, footer: React.ReactNode) => {
  if (footer) {
    return <div className={`${prefixCls}-footer`}>{footer}</div>;
  }
  return null;
};

const renderChildren = (prefixCls: string, children: React.ReactNode) => (
  <div className={`${prefixCls}-content`}>{children}</div>
);

const PageHeader: React.FC<PageHeaderProps> = props => {
  const [compact, updateCompact] = useState(false);
  const onResize = ({ width }: { width: number }) => {
    updateCompact(width < 768, true);
  };
  return (
    <ConfigConsumer>
      {({ getPrefixCls, pageHeader, direction }: ConfigConsumerProps) => {
        const {
          prefixCls: customizePrefixCls,
          style,
          footer,
          children,
          breadcrumb,
          breadcrumbInline,
          breadcrumbRender,
          className: customizeClassName,
        } = props;
        let ghost: undefined | boolean = true;

        // Use `ghost` from `props` or from `ConfigProvider` instead.
        if ('ghost' in props) {
          ghost = props.ghost;
        } else if (pageHeader && 'ghost' in pageHeader) {
          ghost = pageHeader.ghost;
        }

        const prefixCls = getPrefixCls('page-header', customizePrefixCls);

        const getDefaultBreadcrumbDom = () => {
          if ((breadcrumb as BreadcrumbProps)?.routes) {
            return renderBreadcrumb(breadcrumb as BreadcrumbProps);
          }
          return null;
        };

        const defaultBreadcrumbDom = getDefaultBreadcrumbDom();

        const isBreadcrumbComponent = breadcrumb && 'props' in breadcrumb;
        //  support breadcrumbRender function
        const breadcrumbRenderDomFromProps =
          breadcrumbRender?.(props, defaultBreadcrumbDom) ?? defaultBreadcrumbDom;

        const breadcrumbDom = isBreadcrumbComponent ? breadcrumb : breadcrumbRenderDomFromProps;

        const className = classNames(prefixCls, {
          'has-breadcrumb': !!breadcrumbDom,
          'has-breadcrumb-not-inline': !breadcrumbInline,
          'has-footer': !!footer,
          [`${prefixCls}-ghost`]: ghost,
          [`${prefixCls}-compact`]: compact,
        });

        const classNameRtl = { [`${prefixCls}-rtl`]: direction === 'rtl' };

        const renderSlot = (
          slotContainerClassName: string,
          slotContainerStyle?: React.CSSProperties,
          solt?: typeof breadcrumbDom,
        ) => (
          <div
            className={classNames(slotContainerClassName, {
              [`${prefixCls}-has-back`]: props.backIcon !== false && props.onBack,
            })}
            style={slotContainerStyle}
          >
            {solt}
            {renderTitle(prefixCls, props, direction)}
            {children && renderChildren(prefixCls, children)}
            {renderFooter(prefixCls, footer)}
          </div>
        );

        return (
          <ResizeObserver onResize={onResize}>
            {breadcrumbDom && !breadcrumbInline ? (
              <div className={classNames(customizeClassName, classNameRtl)} style={style}>
                <div className={`${prefixCls}-breadcrumb-not-inline`}>
                  {renderBack(
                    prefixCls,
                    getBackIcon(props, direction),
                    props.backText,
                    props.onBack,
                    breadcrumbInline,
                  )}
                  {breadcrumbDom}
                </div>
                {renderSlot(className)}
              </div>
            ) : (
              renderSlot(
                classNames(className, customizeClassName, classNameRtl),
                style,
                breadcrumbDom,
              )
            )}
          </ResizeObserver>
        );
      }}
    </ConfigConsumer>
  );
};

PageHeader.defaultProps = {
  breadcrumbInline: true,
  backText: '返回',
};

export default PageHeader;
