import { useState, useEffect } from "react";
import Tech from "/data/tech.json";

export default function Aside() {
  const [showTech, setShowTech] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTech(true);
    }, 1000);
  }, []);

  return (
    <aside>
      <h3 className="a-title">Tecnologias:</h3>
      <div className="tech-container">
        {showTech ? (
          Tech.map((t) => (
            <div className="tech" key={t.name}>
              <img width={50} src={t.src} alt={t.name + " logo"} />
              <p>{t.name}</p>
            </div>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </aside>
  );
}
