import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Auth from "./Pages/Auth/Auth.jsx";
import PasswordReset from "./Pages/PasswordReset/PasswordReset.jsx";
import { Provider } from "react-redux";
import store from "./store/reduxstore.js";
import "react-toastify/dist/ReactToastify.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/resetpassword",
    element: <PasswordReset />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </MantineProvider>
  </React.StrictMode>
);
