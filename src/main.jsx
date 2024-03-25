import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Gift from "./Gift.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//CONFIGURO LAS RUTAS

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Paola",
    element: <Gift />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>);