import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/* import App from "./describing-the-ui/App"; */
/* import App from "./adding-interactivity/App"; */
import App from "./managing-state/App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
