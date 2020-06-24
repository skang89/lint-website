// import react packages
import React from "react";

// import styles
import "./TriangleBannerBottom.scss";

const TriangleBannerBottom = () => {
  return (
    <div className="bx--grid bx--grid--full-width lc-triangle-bottom">
      <div className="bx--row">
        <div className="bx--col">
          <span className="lc-triangle-bottom__left"></span>
          <span className="lc-triangle-bottom__right"></span>
        </div>
      </div>
    </div>
  );
};

export default TriangleBannerBottom;
