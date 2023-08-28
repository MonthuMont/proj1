import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import First from "./Components/First.jsx";
import { addPostEl } from "./redux/state.js";

export const rerenderEntireTree = (state) => {
    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <First firstState={state} addPostEl={addPostEl}></First>
      </React.StrictMode>
    );
  };