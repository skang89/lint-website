// import react components
import React from "react";
import { Link } from "react-router-dom";

// import style
import "./MainMenu.scss";

const MainMenu = () => {
  return (
    <Link className="lc-button__hamburger">
      <span className="lc-button__hamburger__line lc-button__hamburger__line--top"></span>
      <span className="lc-button__hamburger__line lc-button__hamburger__line--middle"></span>
      <span className="lc-button__hamburger__line lc-button__hamburger__line--bottom"></span>
    </Link>
  );
};

export default MainMenu;
