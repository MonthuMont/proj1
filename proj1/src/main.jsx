import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import state from "./redux/state.js";
import { rerenderEntireTree } from "./render.jsx";
// import state from "./redux/state.js";


// addPostEl('John Cena')

rerenderEntireTree(state);
// messageData={messageData} dialogData={dialogData} userData={userData} messageData1={messageData1}
