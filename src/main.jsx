import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigurationProvider } from "./context/ConfigurationContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigurationProvider>
      <App />
    </ConfigurationProvider>
  </React.StrictMode>
);
