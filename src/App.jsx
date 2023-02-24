import "./App.css";
import { Logo, MainMenu, SearchBar } from "./components";
import Router from "./Router";

export default function App() {
  return (
    <div className="App">
      <header>
        <Logo />
        <MainMenu />
        <SearchBar />
      </header>
      <Router />
    </div>
  );
}
