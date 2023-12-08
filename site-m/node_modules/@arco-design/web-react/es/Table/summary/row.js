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
import React, { useContext } from 'react';
import { SummaryContext } from './context';
import cs from '../../_util/classNames';
function Row(props) {
    var _a = useContext(SummaryContext), columns = _a.columns, stickyOffsets = _a.stickyOffsets, stickyClassNames = _a.stickyClassNames, prefixCls = _a.prefixCls;
    var children = props.children, rest = __rest(props, ["children"]);
    var colSpans = React.Children.map(children, function (child) { return child.props.colSpan || 1; });
    var element = React.Children.map(children, function (child, index) {
        var _a, _b, _c;
        var childElement = child;
        var isSummaryCell = (_a = childElement === null || childElement === void 0 ? void 0 : childElement.props) === null || _a === void 0 ? void 0 : _a.$$ArcoTableSummaryCell;
        var childStyle = (_b = childElement === null || childElement === void 0 ? void 0 : childElement.props) === null || _b === void 0 ? void 0 : _b.style;
        var childClassName = (_c = childElement === null || childElement === void 0 ? void 0 : childElement.props) === null || _c === void 0 ? void 0 : _c.className;
        var prevAllColSpan = colSpans.slice(0, index).reduce(function (p, n) { return p + n; }, 0);
        var stickyIndex = prevAllColSpan;
        var stickyStyle = columns[stickyIndex].fixed === 'left'
            ? { left: stickyOffsets[stickyIndex] }
            : columns[stickyIndex].fixed === 'right'
                ? { right: stickyOffsets[stickyIndex] }
                : {};
        var stickyClassName = columns[stickyIndex].fixed === 'left' || columns[stickyIndex].fixed === 'right'
            ? stickyClassNames[stickyIndex]
            : '';
        return isSummaryCell
            ? React.cloneElement(childElement, __assign(__assign({}, childElement.props), { className: cs(prefixCls + "-td", stickyClassName, childClassName), style: __assign(__assign({}, childStyle), stickyStyle) }))
            : child;
    });
    return React.createElement("tr", __assign({}, rest), element);
}
export default Row;
