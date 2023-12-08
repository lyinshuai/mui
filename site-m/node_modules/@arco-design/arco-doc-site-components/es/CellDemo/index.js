import React from 'react';
export default function CellDemo(props) {
    return React.createElement("div", { className: "demo" }, props.children);
}
