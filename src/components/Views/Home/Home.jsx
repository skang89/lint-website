// import react packages
import React from "react";
import Slider from "react-slick";

// import styles
import "./Home.scss";

const Home = () => {
  const sliderSettings = {
    autoplay: false, // is true
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
    touchMove: true,
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
    } else
      document
        .querySelector(".lc-header__button")
        .classList.remove("lc-header__button--active");
  };

  return (
    <div className="lc-wrapper">
      <header className="lc-header">
        <img
          src="assets/img/LINT_Logo.svg"
          className="lc-header__logo"
          alt="Lint Cosmetics"
        />

        <button className="lc-header__button" onClick={onButtonClick}>
          <img
            src="assets/img/button.svg"
            className="lc-header__button__icon"
            alt="Find out more"
          />
        </button>
      </header>
      <Slider {...sliderSettings}>
        <div className="lc-slider__item">
          <picture>
            <source
              media="(max-width: 1023px)"
              srcSet="assets/img/so-blushing-mobile, assets/img/so-blushing-mobile@2x.jpg 2x, assets/img/so-blushing-mobile@3x.jpg 3x"
              className="lc-slider__img"
              alt="so-blushing"
            />
            <source
              media="(min-width: 1024px)"
              srcSet="assets/img/so-blushing, assets/img/so-blushing@2x.jpg 2x, assets/img/so-blushing@3x.jpg 3x"
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
              srcSet="assets/img/hialex-mobile, assets/img/hialex-mobile@2x.jpg 2x, assets/img/hialex-mobile@3x.jpg 3x"
              className="lc-slider__img"
              alt="hialex"
            />
            <source
              media="(min-width: 1024px)"
              srcSet="assets/img/hialex, assets/img/hialex@2x.jpg 2x, assets/img/hialex@3x.jpg 3x"
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
              srcSet="assets/img/david-mobile, assets/img/david-mobile@2x.jpg 2x, assets/img/david-mobile@3x.jpg 3x"
              className="lc-slider__img"
              alt="david"
            />
            <source
              media="(min-width: 1024px)"
              srcSet="assets/img/david, assets/img/david@2x.jpg 2x, assets/img/david@3x.jpg 3x"
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
              srcSet="assets/img/malowanie-mobile, assets/img/malowanie-mobile@2x.jpg 2x, assets/img/malowanie-mobile@3x.jpg 3x"
              className="lc-slider__img"
              alt="malowanie"
            />
            <source
              media="(min-width: 1024px)"
              srcSet="assets/img/malowanie, assets/img/malowanie@2x.jpg 2x, assets/img/malowanie@3x.jpg 3x"
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
              srcSet="assets/img/ohkatieh-mobile, assets/img/ohkatieh-mobile@2x.jpg 2x, assets/img/ohkatieh-mobile@3x.jpg 3x"
              className="lc-slider__img"
              alt="ohkatieh"
            />
            <source
              media="(min-width: 1024px)"
              srcSet="assets/img/ohkatieh, assets/img/ohkatieh@2x.jpg 2x, assets/img/ohkatieh@3x.jpg 3x"
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
  );
};

export default Home;