import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./Site.css";

let c = createRoot(document.getElementById("root"));

function att() {
  c.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
setInterval(att, 500);
