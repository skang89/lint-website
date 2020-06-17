// import react components
import React from "react";

// import components
import ButtonDropdown from "../Buttons/ButtonDropdown/ButtonDropdown";

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
      <div className="bx--row lc-reviews__reviews lc-collapse">
        <div className="bx--col lc-type__body__b2">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae voluptates
            assumenda hic asperiores ut quos iure rem consequatur suscipit autem
            temporibus dolores eligendi vero veritatis voluptatibus, expedita voluptas id
            repellat!
          </p>
        </div>
      </div>
    </div>
  );
};
export default CustomerReviews;
