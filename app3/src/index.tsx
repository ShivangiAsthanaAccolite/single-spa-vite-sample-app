// @ts-nocheck

import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter,
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;

// Log lifecycles after they are configured
function domElementGetter() {
  return document.getElementById("app3")!;
}
