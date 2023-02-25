import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  PostPage,
  Blog,
  EditPostPage,
  CreatePostPage,
} from "./pages";

const BrowserRouter = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/post/:id", element: <PostPage /> },
  { path: "/post/:id/edit", element: <EditPostPage /> },
  { path: "/post/create", element: <CreatePostPage /> },
  { path: "blog", element: <Blog /> },
]);

export default function Router() {
  return <RouterProvider router={BrowserRouter} />;
}
