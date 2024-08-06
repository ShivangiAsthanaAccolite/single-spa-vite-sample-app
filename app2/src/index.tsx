// @ts-nocheck
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

export const bootstrap = () => Promise.resolve();
export const mount = (props) => {
  console.log("mount", props);
  ReactDOM.render(<App {...props} />, document.getElementById("app2"));
  return Promise.resolve();
};
export const unmount = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("app2"));
  return Promise.resolve();
};
