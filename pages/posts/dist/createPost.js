"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var React = require("react");
function CreatePost(props) {
    return (React.createElement("div", null,
        "Create Post",
        React.createElement(link_1["default"], { href: "/about" }, "Go to About")));
}
exports["default"] = CreatePost;
