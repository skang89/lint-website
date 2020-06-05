// import react components
import React from "react";

// import style
import "./MainMenu.scss";

const MainMenu = () => {
  return (
    <button type="button" title="Main Menu" className="lc-button__hamburger">
      <span className="lc-button__hamburger__line lc-button__hamburger__line--top"></span>
      <span className="lc-button__hamburger__line lc-button__hamburger__line--middle"></span>
      <span className="lc-button__hamburger__line lc-button__hamburger__line--bottom"></span>
    </button>
  );
};

export default MainMenu;
