import React, { useState } from "react";
import "../../assets/css/home/Menu.css";

function Menu() {
  const [active, setActive] = useState(false);
  return (
    <div
      className={"menu " + (active ? "active" : "")}
      onClick={() => setActive(true)}
    ></div>
  );
}

export default Menu;
