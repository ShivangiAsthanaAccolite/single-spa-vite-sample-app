// @ts-nocheck
import React from "react";

const RecipeDetails = (props) => {
  const { apiData } = props;
  console.log("here in recipe details", apiData);

  return (
    // <></>
    <div style={{ margin: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>{apiData.name}</h2>
          <img src={apiData.image} style={{ height: 200, width: 200 }}></img>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: 50,
        }}
      >
        <h3>Ingredients :: </h3>
        <div>
          {apiData.ingredients.map((i) => {
            return <div style={{ padding: 5 }}>{i}</div>;
          })}
        </div>

        <h3>Instructions :: </h3>
        <div>
          {apiData.instructions.map((i) => {
            return <div style={{ padding: 5 }}>{i}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
