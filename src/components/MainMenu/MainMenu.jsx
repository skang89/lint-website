// import react components
import React from "react";
import { Link } from "react-router-dom";

// import style
import "./MainMenu.scss";

const onMenuClick = () => {
  const body = document.body;
  const menu = document.querySelector(".lc-main-menu__menu");

  menu.classList.contains(".lc-main-menu__menu--active")
    ? menu.classList.remove("lc-main-menu__menu--active")
    : menu.classList.toggle("lc-main-menu__menu--active");

  body.classList.contains(".lc-menu__overlay")
    ? body.classList.remove("lc-menu__overlay")
    : body.classList.toggle("lc-menu__overlay");
};

const onSubmenuClick = (e) => {
  e.currentTarget.classList.toggle("lc-main-menu__menu__item--dropdown--active");
};

const MainMenu = () => {
  return (
    <>
      <button
        type="button"
        title="Main Menu"
        className="lc-button__hamburger"
        onClick={onMenuClick}
      >
        <span className="lc-button__hamburger__line lc-button__hamburger__line--top"></span>
        <span className="lc-button__hamburger__line lc-button__hamburger__line--middle"></span>
        <span className="lc-button__hamburger__line lc-button__hamburger__line--bottom"></span>
      </button>

      <div className="bx--grid lc-main-menu__menu">
        <nav className=" lc-main-menu__menu__nav">
          <div className="bx--row">
            <div className="bx--col lc-main-menu__menu__button__container">
              <button
                type="button"
                title="Main Menu"
                className="lc-button__hamburger lc-main-menu__menu__button"
                onClick={onMenuClick}
              >
                <span className="lc-button__hamburger__line lc-button__hamburger__line--top"></span>
                <span className="lc-button__hamburger__line lc-button__hamburger__line--middle"></span>
                <span className="lc-button__hamburger__line lc-button__hamburger__line--bottom"></span>
              </button>
            </div>
          </div>
          <nav className="bx--row">
            <div className="bx--col">
              <ul className="lc-main-menu__menu__items">
                <li
                  className="lc-type__subheader__h4 lc-main-menu__menu__item--dropdown"
                  onClick={onSubmenuClick}
                >
                  <Link to="/" title="link title">
                    Brushes
                    <span className="lc-main-menu__menu__item__icon">&gt;</span>
                  </Link>

                  <ul className="lc-main-menu__menu__submenu__items">
                    <li className="lc-type__subheader__h5">
                      <Link to="/" title="link title">
                        Individual
                      </Link>
                    </li>
                    <li className="lc-type__subheader__h5">
                      <Link to="/" title="link title">
                        Brush sets
                      </Link>
                    </li>
                  </ul>
                </li>

                <li
                  className="lc-type__subheader__h4 lc-main-menu__menu__item--dropdown"
                  onClick={onSubmenuClick}
                >
                  <Link to="/" title="link title">
                    Eye Shadows
                    <span className="lc-main-menu__menu__item__icon">&gt;</span>
                  </Link>

                  <ul className="lc-main-menu__menu__submenu__items">
                    <li className="lc-type__subheader__h5">
                      <Link to="/" title="link title">
                        Individual
                      </Link>
                    </li>
                    <li className="lc-type__subheader__h5">
                      <Link to="/" title="link title">
                        Eye Shadow sets
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="lc-type__subheader__h4 lc-main-menu__menu__item">
                  <Link to="/" title="link title">
                    Our story
                  </Link>
                </li>

                <li className="lc-type__subheader__h4 lc-main-menu__menu__item">
                  <Link to="/" title="link title">
                    The Family
                  </Link>
                </li>

                <li className="lc-type__subheader__h4 lc-main-menu__menu__item">
                  <Link to="/" title="link title">
                    Pro-member
                  </Link>
                </li>

                <li className="lc-type__subheader__h4 lc-main-menu__menu__item">
                  <Link to="/" title="link title">
                    Join / Log in
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </nav>
      </div>
    </>
  );
};

export default MainMenu;
