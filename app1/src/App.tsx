// @ts-nocheck
import React, { useContext, useEffect } from "react";

import { fetchData } from "../../root-config/utils/appUtils";
import { navigateToUrl } from "single-spa";
import { useState } from "react";

const App = () => {
  const [apiData, setApiData] = useState(null);
  const fetchDataFromAPI = async () => {
    if (!apiData) {
      const apiUrl = "https://dummyjson.com/recipes";
      try {
        const data = await fetchData(apiUrl);
        console.log("Fetched data:", data);
        setApiData(data.recipes);
        // Use the fetched data in your application
      } catch (error) {
        console.error("Failed to fetch data:", error);
        // Handle error gracefully
      }
    } else {
      setApiData(null);
    }
  };

  const showRecipe = (path) => {
    navigateToUrl(path);
  };

  const showApiData = () => {
    return (
      <>
        <h5>
          {" "}
          fetching data from api that is implemented using utility modules that
          share common logic
        </h5>

        <h1>CookBook Recipes</h1>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            listStyle: "none",
            padding: 20,
          }}
        >
          {apiData.map((item) => {
            return (
              <>
                <li
                  style={{
                    margin: 10,
                    padding: 25,
                    backgroundColor: "yellow",
                    boderWidth: 2,
                    borderColor: "black",
                    borderRadius: 10,
                  }}
                  onClick={() => showRecipe(`/recipe/${item.id}`)}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={item.image}
                      alt="Description of the image"
                      style={{ height: 100, width: 100 }}
                    ></img>
                    <span
                      style={{
                        marginTop: 10,
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                    >
                      {item.name}
                    </span>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </>
    );
  };

  return (
    <div style={{ margin: 20 }}>
      <h1>Micro Frontend Application 1</h1>
      <p>Welcome to App 1!</p>
      <button onClick={() => fetchDataFromAPI()}>
        {apiData ? <h3>Close</h3> : <h3>Utility Example</h3>}
      </button>
      {apiData ? showApiData() : null}
    </div>
  );
};

export default App;
