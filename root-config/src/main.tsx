// @ts-nocheck

import { registerApplication, start, unregisterApplication } from "single-spa";

import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

registerApplication({
  name: "@org/application1",
  app: () => import("../../app1/src/index"),
  activeWhen: ["/application1"],
});

registerApplication({
  name: "@org/application2",
  app: () => import("../../app2/src/index"),
  activeWhen: ["/application2"],
});

registerApplication({
  name: "@org/application3",
  app: () => import("../../app3/src/index"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@org/application4",
  app: () => import("../../user-creation-vue/src/main"),
  activeWhen: ["/application4"],
});

registerApplication({
  name: "@org/application5",
  app: () => import("../../recipe/src/main"),
  activeWhen: ["/recipe"],
});

start();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
