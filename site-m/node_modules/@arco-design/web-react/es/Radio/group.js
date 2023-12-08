var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import React, { createContext, useContext } from 'react';
import cs from '../_util/classNames';
import { isArray, isObject } from '../_util/is';
import Radio from './radio';
import { ConfigContext } from '../ConfigProvider';
import useMergeValue from '../_util/hooks/useMergeValue';
import useMergeProps from '../_util/hooks/useMergeProps';
export var RadioGroupContext = createContext({
    type: 'radio',
});
var defaultProps = {
    type: 'radio',
    mode: 'outline',
    direction: 'horizontal',
};
function Group(baseProps) {
    var _a;
    var _b = useContext(ConfigContext), getPrefixCls = _b.getPrefixCls, ctxSize = _b.size, componentConfig = _b.componentConfig;
    var props = useMergeProps(baseProps, defaultProps, componentConfig === null || componentConfig === void 0 ? void 0 : componentConfig['Radio.Group']);
    var style = props.style, className = props.className, name = props.name, children = props.children, direction = props.direction, type = props.type, mode = props.mode, options = props.options, disabled = props.disabled;
    var _c = __read(useMergeValue(undefined, {
        defaultValue: props.defaultValue,
        value: props.value,
    }), 2), value = _c[0], setValue = _c[1];
    var size = props.size || ctxSize;
    var prefixCls = getPrefixCls('radio');
    var classNames = cs(prefixCls + "-group", (_a = {},
        _a[prefixCls + "-group-type-button"] = type !== 'radio',
        _a[prefixCls + "-size-" + size] = !!size,
        _a[prefixCls + "-mode-" + mode] = !!mode,
        _a[prefixCls + "-group-disabled"] = disabled,
        _a[prefixCls + "-group-direction-vertical"] = direction === 'vertical',
        _a), className);
    var onChangeValue = function (v, event) {
        var onChange = props.onChange;
        if (v !== value) {
            if (!('value' in props)) {
                setValue(v);
            }
            onChange && onChange(v, event);
        }
    };
    var contextProp = {
        onChangeValue: onChangeValue,
        type: type,
        value: value,
        disabled: disabled,
        group: true,
        name: name,
    };
    return (React.createElement(RadioGroupContext.Provider, { value: contextProp },
        React.createElement("div", { className: classNames, style: style }, options && isArray(options)
            ? options.map(function (option, index) {
                if (isObject(option)) {
                    return (React.createElement(Radio, { key: option.value, disabled: disabled || option.disabled, value: option.value }, option.label));
                }
                return (React.createElement(Radio, { key: index, value: option, disabled: disabled }, option));
            })
            : children)));
}
Group.displayName = 'RadioGroup';
export default Group;
