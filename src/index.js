
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import AppContact from "./App.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppContact />
  </StrictMode>,
  rootElement
);

