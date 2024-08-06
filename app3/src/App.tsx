// @ts-nocheck
import React, { useState } from "react";

const App = () => {
  const [showParcel, setShowParcel] = useState(false);
  return showParcel ? (
    <button
      style={{
        position: "absolute",
        backgroundColor: "#b4b4b4",
        right: 20,
        top: 20,
        padding: 20,
      }}
      onClick={() => setShowParcel((prev) => !prev)}
    >
      <h1 style={{ textAlign: "center" }}>Parcel </h1>
      <p>Welcome to Parcel Example</p>
    </button>
  ) : (
    <button
      style={{
        position: "absolute",
        backgroundColor: "#b4b4b4",
        right: 20,
        top: 20,
        padding: 20,
      }}
      onClick={() => setShowParcel((prev) => !prev)}
    >
      <h1>Parcel</h1>
    </button>
  );
};

export default App;
