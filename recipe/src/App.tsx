// @ts-nocheck
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

// import RecipeDetails from "./RecipeDetails";
import { fetchData } from "../../root-config/utils/appUtils";
import { useParams } from "react-router-dom";

function App() {
  const params = useParams<{ id }>();
  const [apiData, setApiData] = useState(null);

  const recipeDetails = (apiData) => {
    return (
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

  useEffect(() => {
    if (!apiData) {
      const apiUrl = `https://dummyjson.com/recipes/${params.id}`;
      console.log("api", apiUrl);
      try {
        fetchData(apiUrl).then((res) => {
          setApiData(res);
        });

        // Use the fetched data in your application
      } catch (error) {
        console.error("Failed to fetch data:", error);
        // Handle error gracefully
      }
    } else {
      setApiData(null);
    }
  }, []);

  return apiData ? recipeDetails(apiData) : null;
}
export default App;
