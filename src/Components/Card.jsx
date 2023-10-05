import React, { useContext } from "react";
import { Theme } from "../Context/ThemeContext";

function Card() {
  const { theme } = useContext(Theme);
  return (
    <>
      <div className={`card ${theme}`}>
        <h1 className="name">SumitMondal</h1>
        <h3 className="followers">103K followers</h3>
      </div>
    </>
  );
}

export default Card;
