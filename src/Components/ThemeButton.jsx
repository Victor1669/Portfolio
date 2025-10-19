import { useEffect, useState } from "react";

export default function ThemeButton() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <button
      onClick={() => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
      }}
      className="button theme"
    >
      ☀
    </button>
  );
}
