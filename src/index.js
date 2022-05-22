import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DifficultyProvider } from "./services/DifficultyProvider";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DifficultyProvider>
        <App />
      </DifficultyProvider>
    </BrowserRouter>
  </React.StrictMode>
);
