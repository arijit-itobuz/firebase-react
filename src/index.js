"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var app_1 = require("./app");
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(<react_1["default"].StrictMode>
    <app_1["default"] />
  </react_1["default"].StrictMode>);
