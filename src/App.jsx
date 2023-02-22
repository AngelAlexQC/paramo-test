import "./App.css";
import { Logo, MainMenu, SearchBar } from "./components";
export default function App() {
  return (
    <div className="App">
      <header>
        <Logo />
        <MainMenu />
        <SearchBar />
      </header>
    </div>
  );
}
