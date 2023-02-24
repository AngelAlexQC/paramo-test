import { createBrowserRouter } from "react-router-dom";

const BrowserRouter = createBrowserRouter([
  { path: "/", element: <HomePage /> },
]);

export default function Router() {
  return <RouterProvider router={BrowserRouter} />;
}
