// import react packages
import React, { useEffect } from "react";

// import styles
import "./TriangleTop.scss";

const TriangleTop = () => {
  useEffect(() => {
    const triangleWidth = () => {
      console.log("triangle");
    };

    window.addEventListener("resize", triangleWidth);
    window.onload = triangleWidth;
  }, []);

  return (
    <div className="bx--grid bx--grid--full-width lc-triangle-top">
      <div className="bx--row">
        <div className="bx--col">
          <div className="lc-triangle-top__shape"></div>
        </div>
      </div>
    </div>
  );
};

export default TriangleTop;
