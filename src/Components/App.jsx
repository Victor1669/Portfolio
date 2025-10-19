import Aside from "./Aside";
import Header from "./Header";
import Main from "./Main";
import ThemeButton from "./ThemeButton";

export default function App() {
  return (
    <div className="App">
      <Header>
        <ThemeButton />
      </Header>
      <Main />
      <Aside />
    </div>
  );
}
