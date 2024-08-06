// @ts-nocheck

import React, { useEffect, useState } from "react";

import Parcel from "single-spa-react/parcel";
import { ParcelConfig } from "single-spa";

const App = (props: any) => {
  console.log("props", props);
  return (
    <div style={{ margin: 20 }}>
      <h1>Micro Frontend Application 2</h1>
      <p>Welcome to App 2!</p>

      <div
        style={{
          backgroundColor: "#b4b4b4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <p>
          {" "}
          Passing props from root-config to microfrontend app2 and utilizing it
          here
        </p>
        <h4>AuthToken ::</h4>
        <h3>{props.authToken}</h3>
      </div>
    </div>
  );
};

export default App;
