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
import React, { forwardRef, useState, useEffect, useContext, memo } from 'react';
import { CSSTransition } from 'react-transition-group';
import BTween from 'b-tween';
import cs from '../_util/classNames';
import IconToTop from '../../icon/react-icon/IconToTop';
import { ConfigContext } from '../ConfigProvider';
import { on, off } from '../_util/dom';
import throttleByRaf from '../_util/throttleByRaf';
import useMergeProps from '../_util/hooks/useMergeProps';
var defaultProps = {
    visibleHeight: 400,
    easing: 'quartOut',
    duration: 400,
    target: function () { return window; },
};
function BackTop(baseProps, ref) {
    var _a = useContext(ConfigContext), getPrefixCls = _a.getPrefixCls, componentConfig = _a.componentConfig;
    var props = useMergeProps(baseProps, defaultProps, componentConfig === null || componentConfig === void 0 ? void 0 : componentConfig.BackTop);
    var prefixCls = getPrefixCls('backtop');
    var _b = __read(useState(false), 2), visible = _b[0], setVisible = _b[1];
    var getTarget = function (target) {
        return target === window ? document.documentElement : target;
    };
    useEffect(function () {
        var target = props.target && props.target();
        var scrollHandler = throttleByRaf(function () {
            var visibleHeight = props.visibleHeight;
            var scrollTop = getTarget(target).scrollTop;
            setVisible(scrollTop >= visibleHeight);
        });
        on(target, 'scroll', scrollHandler);
        scrollHandler();
        return function () {
            scrollHandler.cancel && scrollHandler.cancel();
            off(target, 'scroll', scrollHandler);
        };
    }, [props.target, props.visibleHeight]);
    var scrollToTop = function () {
        var targetDom = props.target && props.target();
        var t = getTarget(targetDom);
        var scrollTop = t.scrollTop;
        var tween = new BTween({
            from: { scrollTop: scrollTop },
            to: { scrollTop: 0 },
            easing: props.easing,
            duration: props.duration,
            onUpdate: function (keys) {
                t.scrollTop = keys.scrollTop;
            },
        });
        tween.start();
        props.onClick && props.onClick();
    };
    return (React.createElement("div", { ref: ref, className: cs("" + prefixCls, props.className), style: props.style, onClick: scrollToTop },
        React.createElement(CSSTransition, { in: visible, timeout: 100, classNames: "fadeIn", unmountOnExit: true }, props.children || (React.createElement("button", { className: prefixCls + "-button" },
            React.createElement(IconToTop, null))))));
}
var BackTopRef = forwardRef(BackTop);
BackTopRef.displayName = 'BackTop';
export default memo(BackTopRef);
