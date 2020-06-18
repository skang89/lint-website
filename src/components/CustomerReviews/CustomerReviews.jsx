// import react components
import React from "react";

// import components
import ButtonDropdown from "../Buttons/ButtonDropdown/ButtonDropdown";
import ButtonSecondary from "../Buttons/ButtonSecondary/ButtonSecondary";
import ReviewSingle from "../ReviewSingle/ReviewSingle";

// import style
import "./CustomerReviews.scss";

const CustomerReviews = () => {
  return (
    <div className="lc-reviews">
      <div className="bx--row">
        <div className="bx--col">
          <ButtonDropdown
            buttonTitle="Reviews"
            buttonTargetClasses=".lc-collapse.lc-reviews__reviews"
            buttonReviews={true}
          />
        </div>
      </div>
      <div className="lc-reviews__reviews lc-collapse">
        <div className="bx--row">
          <div className="bx--col">
            <ButtonSecondary linkText="Write a review" linkFullWidth={true} />
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col lc-reviews__copy lc-type__body__b2">
            <ReviewSingle />
            <ReviewSingle />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerReviews;
