// @ts-nocheck

import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Application1 from "../../app1/src/App";
import Application2 from "../../app2/src/App";
import Application3 from "../../app3/src/App";
import Application4 from "../../user-creation-vue/src/App.vue";
import Application5 from "../../recipe/src/App";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application1" element={<Application1 />} />
          <Route
            path="/application2"
            element={<Application2 authToken={"d83jD63UdZ6RS6f70D0"} />}
          />
          <Route path="/application4" element={<Application4 />} />
          <Route path="/application3" element={<Application3 />} />
          <Route path="/recipe/:id" element={<Application5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
