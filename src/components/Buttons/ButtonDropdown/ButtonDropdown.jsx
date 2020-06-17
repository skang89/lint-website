// import react components
import React from "react";
import PropTypes from "prop-types";

// import style
import "./ButtonDropdown.scss";

const onDropdownClick = (e) => {
  // map commands to the classList methods
  const fnmap = {
    toggle: "toggle",
    show: "add",
    hide: "remove"
  };

  const collapse = (selector, cmd) => {
    const targets = Array.from(document.querySelectorAll(selector));
    console.log(targets);

    targets.forEach((target) => {
      target.classList[fnmap[cmd]]("show");
    });
  };

  // get all the 'trigger' elements on the page
  const triggers = Array.from(document.querySelectorAll('[data-toggle="lc-collapse"]'));
  console.log(triggers);

  // listen to click events that occuor
  // only on our triggers

  console.log("clicked");
  const elm = e.target;

  if (triggers.includes(elm)) {
    console.log(elm);

    const selector = elm.getAttribute("data-target");
    console.log(selector);

    collapse(selector, "toggle");

    if (elm.getAttribute("aria-expanded") === "false") {
      elm.setAttribute("aria-expanded", "true");
    } else {
      elm.setAttribute("aria-expanded", "false");
    }
  }
};

const ButtonDropdown = (props) => {
  const { buttonTitle, buttonTargetClasses, buttonReviews } = props;

  return (
    <button
      type="button"
      className="lc-button__dropdown"
      data-toggle="lc-collapse"
      data-target={buttonTargetClasses}
      data-text="Collapse"
      data-html-text="Collapse"
      aria-expanded="false"
      onClick={onDropdownClick}
    >
      {buttonTitle}
      {buttonReviews !== false && (
        <>
          <span className="lc-button__dropdown__reviews__amount"> (15)</span>
          <span className="lc-button__dropdown__reviews__stars">
            <span className="lc-button__dropdown__reviews__stars__star lc-button__dropdown__reviews__stars__star--selected">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#B4B4B4"
                  fill-rule="evenodd"
                  d="M8 0L6.022 5.982 0 6.111 4.8 9.938 3.056 16 8 12.382 12.944 16 11.2 9.938 16 6.111 9.978 5.982z"
                />
              </svg>
            </span>
            <span className="lc-button__dropdown__reviews__stars__star lc-button__dropdown__reviews__stars__star--selected">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#B4B4B4"
                  fill-rule="evenodd"
                  d="M8 0L6.022 5.982 0 6.111 4.8 9.938 3.056 16 8 12.382 12.944 16 11.2 9.938 16 6.111 9.978 5.982z"
                />
              </svg>
            </span>
            <span className="lc-button__dropdown__reviews__stars__star lc-button__dropdown__reviews__stars__star--selected">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#B4B4B4"
                  fill-rule="evenodd"
                  d="M8 0L6.022 5.982 0 6.111 4.8 9.938 3.056 16 8 12.382 12.944 16 11.2 9.938 16 6.111 9.978 5.982z"
                />
              </svg>
            </span>
            <span className="lc-button__dropdown__reviews__stars__star lc-button__dropdown__reviews__stars__star--selected">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#B4B4B4"
                  fill-rule="evenodd"
                  d="M8 0L6.022 5.982 0 6.111 4.8 9.938 3.056 16 8 12.382 12.944 16 11.2 9.938 16 6.111 9.978 5.982z"
                />
              </svg>
            </span>
            <span className="lc-button__dropdown__reviews__stars__star">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#B4B4B4"
                  fill-rule="evenodd"
                  d="M8 0L6.022 5.982 0 6.111 4.8 9.938 3.056 16 8 12.382 12.944 16 11.2 9.938 16 6.111 9.978 5.982z"
                />
              </svg>
            </span>
          </span>
        </>
      )}
    </button>
  );
};

// prop types
ButtonDropdown.defaultProps = {
  buttonTitle: "Delivery & returns",
  buttonTargetClasses: ".lc-collapse",
  buttonReviews: false
};

ButtonDropdown.propTypes = {
  buttonTitle: PropTypes.string,
  buttonTargetClasses: PropTypes.string,
  buttonReviews: PropTypes.bool
};

export default ButtonDropdown;
