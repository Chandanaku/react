//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./components/component1";

const App = () => {
  return (
    <div className="profile">
      <Profile name="chandana" age={26} isactive={"true"}></Profile>
    </div>
  );
};

export default App;
