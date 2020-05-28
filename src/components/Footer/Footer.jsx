// import react packages
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bx--grid bx--grid--full-width lc-footer">
      <div className="bx--row lc-footer__social">
        <div className="bx--col-sm-3 bx--col-md-3 bx--col-lg-3 bx--col-max-3">
          <Link
            to="/"
            title="Lint Cosmetics instagram"
            className="lc-button lc-footer__social__icon"
          >
            <img
              src="assets/icons/icons-social-media-instagram-small.svg"
              alt="Instagram Icon"
            />
          </Link>
          <Link
            to="/"
            title="Lint Cosmetics facebook"
            className="lc-button lc-footer__social__icon"
          >
            <img
              src="assets/icons/icons-social-media-facebook-small.svg"
              alt="facebook Icon"
            />
          </Link>
          <Link
            to="/"
            title="Lint Cosmetics pinterest"
            className="lc-button lc-footer__social__icon"
          >
            <img
              src="assets/icons/icons-social-media-pinterest-small.svg"
              alt="pinterest Icon"
            />
          </Link>
          <Link
            to="/"
            title="Lint Cosmetics twitter"
            className="lc-button lc-footer__social__icon"
          >
            <img
              src="assets/icons/icons-social-media-twitter-small.svg"
              alt="twitter Icon"
            />
          </Link>
        </div>
      </div>
      <div className="bx--row lc-footer__menu">
        <div className="bx--col">
          <ul className="lc-footer__menu__items">
            <li className="lc-type__subheader__h6 lc-footer__menu__item">
              <Link to="/" title="Footer menu link">
                Delivery and Returns
              </Link>
            </li>
            <li className="lc-type__subheader__h6 lc-footer__menu__item">
              <Link to="/" title="Footer menu link">
                Shipping
              </Link>
            </li>
            <li className="lc-type__subheader__h6 lc-footer__menu__item">
              <Link to="/" title="Footer menu link">
                Payment Options
              </Link>
            </li>
            <li className="lc-type__subheader__h6 lc-footer__menu__item">
              <Link to="/" title="Footer menu link">
                About Lint
              </Link>
            </li>
            <li className="lc-type__subheader__h6 lc-footer__menu__item">
              <Link to="/" title="Footer menu link">
                The Lint Family
              </Link>
            </li>
            <li className="lc-type__subheader__h6 lc-footer__menu__item">
              <Link to="/" title="Footer menu link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
