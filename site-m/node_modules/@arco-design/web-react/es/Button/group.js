import React, { useContext } from 'react';
import cs from '../_util/classNames';
import { ConfigContext } from '../ConfigProvider';
function Group(props, ref) {
    var className = props.className, style = props.style, children = props.children;
    var getPrefixCls = useContext(ConfigContext).getPrefixCls;
    var prefixCls = getPrefixCls('btn-group');
    var classNames = cs(prefixCls, className);
    return (React.createElement("div", { ref: ref, className: classNames, style: style }, children));
}
var GroupComponent = React.forwardRef(Group);
GroupComponent.displayName = 'ButtonGroup';
export default GroupComponent;
