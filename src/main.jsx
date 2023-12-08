import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  BirthdayUserForm,
  LandingPage,
  LyricsPanel,
  RegistrationForm,
  SongSelectionForm,
} from "./component/index.js";
import { UserContextProvider } from "./component/UserDetailContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,  // 0
  },
  {
    path: "/register",
    element: <RegistrationForm />,  //1
  },
  {
    path: "/birthday-user",
    element: <BirthdayUserForm />, //2
  },
  {
    path: "/song-selection",
    element: <SongSelectionForm />,  //3
  },
  {
    path: "/get-lyrics",
    element: <LyricsPanel />, //4
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
