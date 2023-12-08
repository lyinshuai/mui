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
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import cs from '../../_util/classNames';
import PictureItem from './pictureItem';
import TextItem from './textItem';
import { ConfigContext } from '../../ConfigProvider';
import { isFunction } from '../../_util/is';
export var FileList = function (props) {
    var locale = useContext(ConfigContext).locale;
    var listType = props.listType, fileList = props.fileList, renderUploadList = props.renderUploadList, renderUploadItem = props.renderUploadItem, prefixCls = props.prefixCls, rest = __rest(props, ["listType", "fileList", "renderUploadList", "renderUploadItem", "prefixCls"]);
    if (isFunction(renderUploadList)) {
        return React.createElement("div", { className: prefixCls + "-list" }, renderUploadList(fileList, rest));
    }
    return (React.createElement(TransitionGroup, { className: cs(prefixCls + "-list", prefixCls + "-list-type-" + listType) }, fileList.map(function (file) {
        var originNode = listType === 'picture-card' ? (React.createElement("div", { className: prefixCls + "-list-item " + prefixCls + "-list-item-" + file.status },
            React.createElement(PictureItem, __assign({}, props, { file: file })))) : (React.createElement(TextItem, __assign({}, props, { file: file, locale: locale })));
        if (isFunction(renderUploadItem)) {
            originNode = renderUploadItem(originNode, file, fileList);
        }
        return listType === 'picture-card' ? (React.createElement(CSSTransition, { key: file.uid, timeout: { enter: 200, exit: 400 }, classNames: prefixCls + "-slide-inline", onEntered: function (e) {
                e.style.width = '';
            }, onExit: function (e) {
                e.style.width = e.scrollWidth + "px";
            }, onExiting: function (e) {
                e.style.width = 0;
            }, onExited: function (e) {
                e.style.width = 0;
            } }, originNode)) : (React.createElement(CSSTransition, { key: file.uid, timeout: { enter: 200, exit: 400 }, classNames: prefixCls + "-slide-up", onExit: function (e) {
                e.style.height = e.scrollHeight + "px";
            }, onExiting: function (e) {
                e.style.height = 0;
            }, onExited: function (e) {
                e.style.height = 0;
            } }, originNode));
    })));
};
FileList.defaultProps = {
    listType: 'text',
};
FileList.displayName = 'FileList';
export default FileList;
