import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home/Home";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: 0 }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Home />
    </div>
  );
}

export default App;
