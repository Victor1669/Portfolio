import { useState } from "react";

import "../CSS/Toggle.css";
import "../CSS/Variables.css";

export default function Toggle() {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    document.documentElement.setAttribute("theme", theme);
    theme == "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <>
      <label className="switch">
        <input onClick={toggle} type="checkbox" />
        <span className="slider_round"></span>
      </label>
    </>
  );
}
