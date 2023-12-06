import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Auth from "./Pages/Auth/Auth";
import "@mantine/core/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
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
  ]);

  return (
    // <Auth/>
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: 0 }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      {/* <Home /> */}
      {/* <Profile/> */}
      <Auth />
    </div>
  );
}

export default App;
