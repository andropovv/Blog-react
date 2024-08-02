import { jsx as _jsx } from "react/jsx-runtime";
import { render } from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
render(_jsx(BrowserRouter, { children: _jsx(App, {}) }), document.getElementById("root"));
