import React, { memo, useContext, forwardRef } from 'react';
import IconEmpty from '../../icon/react-icon/IconEmpty';
import cs from '../_util/classNames';
import { ConfigContext } from '../ConfigProvider';
import useMergeProps from '../_util/hooks/useMergeProps';
function Empty(baseProps, ref) {
    var _a = useContext(ConfigContext), getPrefixCls = _a.getPrefixCls, globalLocale = _a.locale, componentConfig = _a.componentConfig;
    var props = useMergeProps(baseProps, {}, componentConfig === null || componentConfig === void 0 ? void 0 : componentConfig.Empty);
    var style = props.style, className = props.className, description = props.description, icon = props.icon, imgSrc = props.imgSrc;
    var prefixCls = getPrefixCls('empty');
    var classNames = cs(prefixCls, className);
    var noData = globalLocale.Empty.noData;
    var alt = typeof description === 'string' ? description : 'empty';
    return (React.createElement("div", { ref: ref, className: classNames, style: style },
        React.createElement("div", { className: prefixCls + "-wrapper" },
            React.createElement("div", { className: prefixCls + "-image" }, imgSrc ? React.createElement("img", { alt: alt, src: imgSrc }) : icon || React.createElement(IconEmpty, null)),
            React.createElement("div", { className: prefixCls + "-description" }, description || noData))));
}
var EmptyComponent = forwardRef(Empty);
EmptyComponent.displayName = 'Empty';
export default memo(EmptyComponent);
