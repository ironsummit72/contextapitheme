import React, { useContext } from "react";
import { Theme } from "../Context/ThemeContext";

function Toggle() {
  const { setTheme } = useContext(Theme);
  return (
    <>
      <div className="toggle_container">
        <input
          type="checkbox"
          id="theme"
          onChange={(e) => {
            const isChecked = e.target.checked;
            if (isChecked) {
              setTheme("dark");
            } else {
              setTheme("light");
            }
          }}
        ></input>
        <label htmlFor="theme">darktheme</label>
      </div>
    </>
  );
}

export default Toggle;
