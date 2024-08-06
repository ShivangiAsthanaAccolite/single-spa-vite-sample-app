// @ts-nocheck
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Parcel from "single-spa-react/parcel";
import { ParcelConfig } from "single-spa";
import { mountRootParcel } from "single-spa";

const Home = () => {
  const [parcelConfig, setParcelConfig] = useState<ParcelConfig<{}> | null>(
    null
  );

  useEffect(() => {
    const loadParcelConfig = async () => {
      try {
        console.log("Starting to load parcel config...");
        const config = (await import(
          "../../app3/src/index.tsx"
        )) as unknown as ParcelConfig<{}>;
        console.log("Parcel config loaded:", config);
        setParcelConfig(config);
      } catch (error) {
        console.error("Error loading parcel config:", error);
      }
    };

    loadParcelConfig();
  }, []);
  return (
    <div style={{}}>
      <h1>Sample Application with Vite+Single-Spa+React+Vue</h1>
      <p>Welcome to my Sample Application</p>
      <div
        style={{
          display: "flex",
          margin: 20,
          padding: 20,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            margin: 20,
            padding: 20,
            backgroundColor: "#b4b4b4",
          }}
        >
          <Link
            to={"application1"}
            style={{
              textDecorationLine: "none",
              color: "black",
              fontSize: 25,
            }}
          >
            Please click here to navigate to Microfrontend 1
          </Link>
        </div>
        <div
          style={{
            margin: 20,
            padding: 20,
            backgroundColor: "#b4b4b4",
          }}
        >
          <Link
            to={"application2"}
            style={{
              textDecorationLine: "none",
              color: "black",
              fontSize: 25,
            }}
          >
            Please click here to navigate to Microfrontend 2
          </Link>
        </div>
        <div
          style={{
            margin: 20,
            padding: 20,
            backgroundColor: "#b4b4b4",
          }}
        >
          <Link
            to={"application4"}
            style={{
              textDecorationLine: "none",
              color: "black",
              fontSize: 25,
            }}
          >
            Please click here to navigate to Microfrontend 3 with Vue
          </Link>
        </div>
      </div>
      {parcelConfig ? <Parcel config={parcelConfig} /> : <p>Loading...</p>}
    </div>
  );
};

export default Home;
