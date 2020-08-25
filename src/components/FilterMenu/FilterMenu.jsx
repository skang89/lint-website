// import react pacakges
import React from "react";

// import styles
import "./FilterMenu.scss";

const onFilterClick = () => {
  const body = document.body;
  const menu = document.querySelector(".lc-filter-menu__menu");

  menu.classList.contains(".lc-filter-menu__menu--active")
    ? menu.classList.remove("lc-filter-menu__menu--active")
    : menu.classList.toggle("lc-filter-menu__menu--active");

  body.classList.contains(".lc-menu__overlay")
    ? body.classList.remove("lc-menu__overlay")
    : body.classList.toggle("lc-menu__overlay");
};

const FilterMenu = () => {
  return (
    <>
      <button
        type="button"
        title="sort by filter"
        className="lc-filter-menu__button"
        onClick={onFilterClick}
      >
        Featured
      </button>

      <div className="bx--grid lc-filter-menu__menu">
        <div className="bx--row">
          <div className="bx--col lc-filter-menu__menu__button__container">
            <button
              type="button"
              title="sort by filter"
              className="lc-filter-menu__button lc-filter-menu__menu__button"
              onClick={onFilterClick}
            >
              Featured
            </button>
          </div>
        </div>
        <div className="bx--row  lc-filter-menu__menu__items">
          <div className="bx--col">
            <button type="button" title="Featured" name="Featured" className="">
              Featured
            </button>
          </div>
        </div>
        <div className="bx--row  lc-filter-menu__menu__items">
          <div className="bx--col">
            <button
              type="button"
              title="Price: High - Low"
              name="Price: High - Low"
              className=""
            >
              Price: High - Low
            </button>
          </div>
        </div>
        <div className="bx--row  lc-filter-menu__menu__items">
          <div className="bx--col">
            <button
              type="button"
              title="Price: Low - High"
              name="Price: Low - High"
              className=""
            >
              Price: Low - High
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterMenu;
