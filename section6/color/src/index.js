import React from "react";
import ReactDOM from "react-dom";
import { ColorProvider } from "./ColorProvider";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
