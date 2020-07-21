// import react packages
import React, { useEffect } from "react";

// import styles
import "./TriangleTop.scss";

const TriangleTop = () => {
  useEffect(() => {
    const triangleWidth = () => {
      const width = window.innerWidth;
      const borderWidth = width;
      const triangleShape = document.querySelector(".lc-triangle-top__shape");

      return width <= 672
        ? triangleShape.setAttribute(
            "style",
            `border-width: ${148 + borderWidth / 2 - 168}px ${borderWidth / 2}px 0 ${
              borderWidth / 2
            }px;`
          )
        : triangleShape.setAttribute("style", "");
    };

    window.addEventListener("resize", triangleWidth);
    window.onload = triangleWidth;
  }, []);

  return (
    <div className="bx--grid bx--grid--full-width bx--no-gutter lc-triangle-top">
      <div className="bx--row">
        <div className="bx--col">
          <div className="lc-triangle-top__shape"></div>
        </div>
      </div>
    </div>
  );
};

export default TriangleTop;
