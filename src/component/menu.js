import React from "react";
import Navbar from "./navbar2";
import "./menu.css";
import Coffee from "./coffee";
import Tea from "./tea";
import CakePastry from "./cakespastry";

function Menu() {
  return (
    <div className="menu" style={{ backgroundColor: "black" }}>
      <Navbar />
      <div className="menu-list">
        <Coffee />
        <Tea />
        <CakePastry />
      </div>
    </div>
  );
}

export default Menu;
