import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { LandingPage, RegistrationForm } from "./component/index.js";


const router = createBrowserRouter([
  {
    path:"/" ,
    element: <LandingPage />,
  } ,
  {
    path:"/register" ,
    element: <RegistrationForm />,
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
