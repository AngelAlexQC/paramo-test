import "./App.css";
import { Logo, MainMenu, SearchBar } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages";

const BrowserRouter = createBrowserRouter([]);

export default function App() {
  return (
    <div className="App">
      <header>
        <Logo />
        <MainMenu />
        <SearchBar />
      </header>
      <RouterProvider router={BrowserRouter} />
    </div>
  );
}
