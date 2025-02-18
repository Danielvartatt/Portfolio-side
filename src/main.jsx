import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { MainPage, ProPage, ProSidePage } from "./pages/index.jsx";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "Portfolio-side",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      { path: "/Portfolio-side/Prosjekt/", element: <ProPage /> },
      {
        path: "Portfolio-side/Prosjekt/:ProsjektName",
        element: <ProSidePage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
