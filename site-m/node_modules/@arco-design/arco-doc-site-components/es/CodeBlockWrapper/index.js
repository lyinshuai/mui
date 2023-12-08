import React from 'react';
function CodeBlockWrapper(props) {
    var id = props.id, children = props.children;
    return (React.createElement("div", { id: id.replace(/[\s/]/g, '-'), className: "codebox-wrapper" }, children));
}
export default CodeBlockWrapper;
