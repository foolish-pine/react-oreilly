import React from "react";
import ReactDOM from "react-dom";
import { StarRating } from "./StarRating";

ReactDOM.render(
  <React.StrictMode>
    <StarRating style={{ backgroundColor: "lightblue" }} />
  </React.StrictMode>,
  document.getElementById("root")
);
