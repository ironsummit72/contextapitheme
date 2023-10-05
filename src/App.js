import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Toggle from "./Components/Toggle";
import { Theme } from "./Context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <Theme.Provider value={{ theme, setTheme }}>
        <div class="main_container">
          <Toggle />
          <Card />
        </div>
      </Theme.Provider>
    </>
  );
}

export default App;
