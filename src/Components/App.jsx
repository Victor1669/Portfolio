import { useEffect, useState } from "react";
import Aside from "./Aside";
import Header from "./Header";
import Main from "./Main";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <Header>
        <button
          onClick={() => {
            setTheme((prev) => (prev === "dark" ? "light" : "dark"));
          }}
          className="button theme"
        >
          ☀
        </button>
      </Header>
      <Main />
      <Aside />
    </div>
  );
}
