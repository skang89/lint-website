// import react packages
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Home = () => {
  const [loading, setloading] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setloading("lc-loading--hidden");
    }, 2500);
  }, [loading]);

  const sliderSettings = {
    autoplay: true, // is true
    autoplaySpeed: 2500,
    arrows: false,
    centerMode: true,
    centerPadding: "20px",
    className: "lc-slider",
    draggable: false,
    fade: true,
    infinite: true,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    touchMove: true
  };

  const onButtonClick = () => {
    if (
      !document
        .querySelector(".lc-header__button")
        .classList.contains("lc-header__button--active")
    ) {
      document
        .querySelector(".lc-header__button")
        .classList.toggle("lc-header__button--active");
      document
        .querySelector(".lc-header__overlay")
        .classList.toggle("lc-header__overlay--active");
    } else {
      document
        .querySelector(".lc-header__button")
        .classList.remove("lc-header__button--active");
      document
        .querySelector(".lc-header__overlay")
        .classList.remove("lc-header__overlay--active");
    }
  };

  return (
    <>
      <div className={`lc-loading ${loading}`}>
        <img
          src="assets/img/LINT_Logo.svg"
          className="lc-header__logo"
          alt="Lint Cosmetics"
        />
      </div>

      <div className="lc-wrapper">
        <header className="lc-header">
          <Link to="/">
            <img
              src="assets/img/LINT_Logo.svg"
              className="lc-header__logo"
              alt="Lint Cosmetics"
            />
          </Link>

          <button className="lc-header__button" onClick={onButtonClick}>
            <img
              src="assets/img/button.svg"
              className="lc-header__button__icon"
              alt="Find out more"
            />
          </button>

          <div className="lc-header__overlay" id="lc-header__overlay">
            <div className="lc-header__overlay__text">
              <div>
                <p>
                  Pro Makeup <br /> Tools Coming <br />
                  <span>Holidays 2020</span>
                </p>
              </div>
              <div>
                <p>Leave your email address below to be part of our launch.</p>
                {/* <!-- Begin Mailchimp Signup Form --> */}

                <div id="mc_embed_signup">
                  <form
                    action="https://lintcosmetics.us8.list-manage.com/subscribe/post?u=86574572c0762508b3d21fc7a&amp;id=7fe3e5cc42"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate lc-form"
                    target="_self"
                    noValidate
                  >
                    <div id="mc_embed_signup_scroll">
                      <div className="mc-field-group lc-form__group">
                        <label htmlFor="mce-EMAIL lc-form__label">
                          Email Address<span className="asterisk">*</span>
                        </label>
                        <input
                          type="email"
                          name="EMAIL"
                          className="required email  lc-form__field"
                          id="mce-EMAIL"
                          placeholder="Email address"
                          defaultValue=""
                        />
                      </div>
                      <div id="mce-responses" className="clear">
                        <div
                          className="response"
                          id="mce-error-response"
                          style={{ display: "none" }}
                        ></div>
                        <div
                          className="response"
                          id="mce-success-response"
                          style={{ display: "none" }}
                        ></div>
                      </div>
                      {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                      <div
                        style={{ position: "absolute", left: "-5000px" }}
                        aria-hidden="true"
                      >
                        <input
                          type="text"
                          name="b_86574572c0762508b3d21fc7a_7fe3e5cc42"
                          tabIndex="-1"
                          value=""
                        />
                      </div>
                      <div className="clear">
                        <input
                          type="submit"
                          value="Subscribe"
                          name="subscribe"
                          id="mc-embedded-subscribe"
                          className="button lc-button"
                        />
                      </div>
                    </div>
                  </form>
                </div>

                {/* <!--End mc_embed_signup--> */}
              </div>
            </div>
          </div>
        </header>
        <Slider {...sliderSettings}>
          <div className="lc-slider__item">
            <picture>
              <source
                media="(max-width: 1023px)"
                srcSet="assets/img/so-blushing-mobile.jpg, assets/img/so-blushing-mobile@2x.jpg 2x, assets/img/so-blushing-mobile@3x.jpg 3x"
                className="lc-slider__img"
                alt="so-blushing"
              />
              <source
                media="(min-width: 1024px)"
                srcSet="assets/img/so-blushing.jpg, assets/img/so-blushing@2x.jpg 2x, assets/img/so-blushing@3x.jpg 3x"
                className="lc-slider__img"
                alt="so-blushing"
              />
              <img
                src="assets/img/so-blushing.jpg"
                srcSet="assets/img/so-blushing@2x.jpg 2x, assets/img/so-blushing@3x.jpg 3x"
                className="lc-slider__img"
                alt="so-blushing"
              />
            </picture>
          </div>
          <div className="lc-slider__item">
            <picture>
              <source
                media="(max-width: 1023px)"
                srcSet="assets/img/hialex-mobile.jpg, assets/img/hialex-mobile@2x.jpg 2x, assets/img/hialex-mobile@3x.jpg 3x"
                className="lc-slider__img"
                alt="hialex"
              />
              <source
                media="(min-width: 1024px)"
                srcSet="assets/img/hialex.jpg, assets/img/hialex@2x.jpg 2x, assets/img/hialex@3x.jpg 3x"
                className="lc-slider__img"
                alt="hialex"
              />
              <img
                src="assets/img/hialex.jpg"
                srcSet="assets/img/hialex@2x.jpg 2x, assets/img/hialex@3x.jpg 3x"
                className="lc-slider__img"
                alt="hialex"
              />
            </picture>
          </div>
          <div className="lc-slider__item">
            <picture>
              <source
                media="(max-width: 1023px)"
                srcSet="assets/img/david-mobile.jpg, assets/img/david-mobile@2x.jpg 2x, assets/img/david-mobile@3x.jpg 3x"
                className="lc-slider__img"
                alt="david"
              />
              <source
                media="(min-width: 1024px)"
                srcSet="assets/img/david.jpg, assets/img/david@2x.jpg 2x, assets/img/david@3x.jpg 3x"
                className="lc-slider__img"
                alt="david"
              />
              <img
                src="assets/img/david.jpg"
                srcSet="assets/img/david@2x.jpg 2x, assets/img/david@3x.jpg 3x"
                className="lc-slider__img"
                alt="david"
              />
            </picture>
          </div>
          <div className="lc-slider__item">
            <picture>
              <source
                media="(max-width: 1023px)"
                srcSet="assets/img/malowanie-mobile.jpg, assets/img/malowanie-mobile@2x.jpg 2x, assets/img/malowanie-mobile@3x.jpg 3x"
                className="lc-slider__img"
                alt="malowanie"
              />
              <source
                media="(min-width: 1024px)"
                srcSet="assets/img/malowanie.jpg, assets/img/malowanie@2x.jpg 2x, assets/img/malowanie@3x.jpg 3x"
                className="lc-slider__img"
                alt="malowanie"
              />
              <img
                src="assets/img/malowanie@3x.jpg "
                srcSet="assets/img/malowanie@2x.jpg 2x, assets/img/malowanie@3x.jpg 3x"
                className="lc-slider__img"
                alt="malowanie"
              />
            </picture>
          </div>
          <div className="lc-slider__item">
            <picture>
              <source
                media="(max-width: 1023px)"
                srcSet="assets/img/ohkatieh-mobile.jpg, assets/img/ohkatieh-mobile@2x.jpg 2x, assets/img/ohkatieh-mobile@3x.jpg 3x"
                className="lc-slider__img"
                alt="ohkatieh"
              />
              <source
                media="(min-width: 1024px)"
                srcSet="assets/img/ohkatieh.jpg, assets/img/ohkatieh@2x.jpg 2x, assets/img/ohkatieh@3x.jpg 3x"
                className="lc-slider__img"
                alt="ohkatieh"
              />
              <img
                src="assets/img/ohkatieh.jpg"
                srcSet="assets/img/ohkatieh@2x.jpg 2x, assets/img/ohkatieh@3x.jpg 3x"
                className="lc-slider__img"
                alt="ohkatieh"
              />
            </picture>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Home;
