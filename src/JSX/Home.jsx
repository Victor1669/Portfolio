import "../CSS/Home.css";
import Toggle from "./Toggle";
import HomeButton from "./HomeButton";
import Redes from "./Redes";

function Home() {
  return (
    <>
      <div className="homeCont">
        <div className="pfpImageContainer">
          <img width={100} src="../../IMG/react.webp" />
        </div>
        <p className="nickName">@Victor1669</p>
        <Toggle />
        {[
          "Um pouco mais sobre mim",
          "Baixar currículo",
          "Ver meu portfólio",
          "Projetos Realizados",
        ].map((btn, index) => (
          <HomeButton key={index} texto={btn} />
        ))}
        <Redes />
      </div>
    </>
  );
}

export { Home };
