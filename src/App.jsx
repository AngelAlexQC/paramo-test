import "./App.css";
import { Logo, MainMenu, SearchBar } from "./components";
import { CustomBrowserRouter } from "./Router";
import {
  AboutPage,
  Blog,
  ContactPage,
  CreatePostPage,
  EditPostPage,
  HomePage,
  PostPage,
} from "./pages";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <CustomBrowserRouter>
      <div className="App">
        <header>
          <Logo />
          <MainMenu />
          <SearchBar />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/post/:id/edit" element={<EditPostPage />} />
          <Route path="/post/create" element={<CreatePostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
    </CustomBrowserRouter>
  );
}
