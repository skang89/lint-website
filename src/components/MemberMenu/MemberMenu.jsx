// import react packages
import React from "react";
import { Link } from "react-router-dom";

// import styles
import "./MemberMenu.scss";

const MemberMenu = () => {
  return (
    <ul className="lc-member-menu">
      <li className="lc-type__subheader__h2 lc-member-menu--active">
        <Link to="/" title="view orders">
          Orders
        </Link>
      </li>
      <li className="lc-type__subheader__h2">
        <Link to="/" title="view favourites">
          Favourites
        </Link>
      </li>
      <li className="lc-type__subheader__h2">
        <Link to="/" title="view settings">
          Settings
        </Link>
      </li>
    </ul>
  );
};

export default MemberMenu;
