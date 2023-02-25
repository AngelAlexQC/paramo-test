import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { HomePage, PostPage, Blog } from "./pages";

const BrowserRouter = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/post/:id", element: <PostPage /> },
  { path: "blog", element: <Blog /> },
]);

export default function Router() {
  return <RouterProvider router={BrowserRouter} />;
}
