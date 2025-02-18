import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { MainPage, ProPage, ProSidePage } from "./pages/index.jsx";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      { path: "Prosjekt/", element: <ProPage /> },
      { path: "/Prosjekt/:ProsjektName", element: <ProSidePage /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
