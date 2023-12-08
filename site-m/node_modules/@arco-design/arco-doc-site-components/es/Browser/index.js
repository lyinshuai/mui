import React from 'react';
function Browser(props) {
    var withUrl = props.withUrl, children = props.children;
    var className = 'ac-browser';
    if (withUrl) {
        className += ' ac-browser-with-url';
    }
    return (React.createElement("div", { className: className },
        React.createElement("div", { className: "ac-browser-header" }),
        React.createElement("div", { className: "ac-browser-content" }, children)));
}
export default Browser;
