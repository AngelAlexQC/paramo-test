import "./App.css";
import { HeroImage, Logo, MainMenu, SearchBar } from "./components";
export default function App() {
  return (
    <div className="App">
      <header>
        <Logo />
        <MainMenu />
        <SearchBar />
      </header>
      <main>
        <HeroImage />
      </main>
    </div>
  );
}
