import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Button } from "@repo/ui/button";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import TokensPage from "./pages/TokensPage";
import ComponentsPage from "./pages/ComponentsPage";

import "./index.css";

// Define our routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "tokens",
        element: <TokensPage />,
      },
      {
        path: "components",
        element: <ComponentsPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
} 