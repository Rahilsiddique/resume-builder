import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ResumeState from "./context/ResumeState";

ReactDOM.render(
  <React.StrictMode>
    <ResumeState>
      <App />
    </ResumeState>
  </React.StrictMode>,
  document.getElementById("root")
);
