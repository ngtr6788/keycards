import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

// NOTE TO SELF: Check back all elements with role= in it.
// Elements with ARIA roles must use a valid, non-abstract ARIA role. Warning.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
