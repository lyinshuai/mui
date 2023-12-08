var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { forwardRef, useContext } from 'react';
import IconLink from '../../icon/react-icon/IconLink';
import cs from '../_util/classNames';
import { ConfigContext } from '../ConfigProvider';
import useMergeProps from '../_util/hooks/useMergeProps';
var defaultProps = {
    hoverable: true,
};
function Link(baseProps, ref) {
    var _a;
    var _b = useContext(ConfigContext), getPrefixCls = _b.getPrefixCls, componentConfig = _b.componentConfig;
    var props = useMergeProps(baseProps, defaultProps, componentConfig === null || componentConfig === void 0 ? void 0 : componentConfig.Link);
    var className = props.className, style = props.style, children = props.children, icon = props.icon, status = props.status, disabled = props.disabled, hoverable = props.hoverable, rest = __rest(props, ["className", "style", "children", "icon", "status", "disabled", "hoverable"]);
    var prefixCls = getPrefixCls('link');
    var TagWrapper = 'href' in props ? 'a' : 'span';
    return (React.createElement(TagWrapper, __assign({ className: cs(prefixCls, (_a = {},
            _a[prefixCls + "-disabled"] = disabled,
            _a[prefixCls + "-is-" + status] = status,
            _a[prefixCls + "-with-icon"] = icon,
            _a[prefixCls + "-hoverless"] = !hoverable,
            _a), className), ref: ref }, rest, { style: style, onClick: function (e) {
            if (disabled) {
                e.preventDefault();
                e.stopPropagation();
            }
            else {
                props.onClick && props.onClick(e);
            }
        } }),
        icon ? (React.createElement("span", { className: prefixCls + "-icon" }, icon === true ? React.createElement(IconLink, null) : icon)) : null,
        children));
}
var LinkRef = forwardRef(Link);
LinkRef.displayName = 'Link';
export default LinkRef;
