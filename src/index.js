import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./common.scss";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./AppContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
