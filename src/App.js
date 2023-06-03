import { useState } from "react";
import "./App.css";
import "./component/styles/themes.css";
import FabMenu from "./component/common/FabMenu";
import Home from "./component/pages/Home";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className={`App ${theme}`}>
      <FabMenu changeTheme={changeTheme} />
      <Home theme={theme}></Home>
    </div>
  );
}

export default App;
