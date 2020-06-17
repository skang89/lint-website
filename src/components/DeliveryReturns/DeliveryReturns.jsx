// import react components
import React from "react";

// import components
import ButtonDropdown from "../Buttons/ButtonDropdown/ButtonDropdown";

// import style
import "./DeliveryReturns.scss";

const DeliveryReturns = () => {
  return (
    <div className="lc-delivery-returns">
      <div className="bx--row">
        <div className="bx--col">
          <ButtonDropdown
            buttonTitle="Delivery & Returns"
            buttonTargetClasses=".lc-collapse.lc-delivery-returns__copy"
          />
        </div>
      </div>
      <div className="bx--row lc-delivery-returns__copy lc-collapse">
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
export default DeliveryReturns;
