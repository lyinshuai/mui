import React from 'react';
import { SummaryContext } from '../summary/context';
function Tfoot(props) {
    var summary = props.summary, data = props.data, prefixCls = props.prefixCls, columns = props.columns, stickyOffsets = props.stickyOffsets, stickyClassNames = props.stickyClassNames;
    return (React.createElement("tfoot", { className: prefixCls + "-tfoot" },
        React.createElement(SummaryContext.Provider, { value: { columns: columns, stickyOffsets: stickyOffsets, stickyClassNames: stickyClassNames, prefixCls: prefixCls } }, summary(data))));
}
export default Tfoot;
