// import react packages
import React from "react";
import Slider from "react-slick";

// import styles
import "./Home.scss";

const Home = () => {
  const sliderSettings = {
    autoplay: true, // is true
    autoplaySpeed: 2500,
    arrows: false,
    centerMode: true,
    className: "lc-slider",
    draggable: false, // is false
    fade: true,
    infinite: true,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true, // is false
    touchMove: true, // is false
  };

  return (
    <div className="lc-wrapper">
      <img src="/assets/img/LINT_Logo.svg" alt="Lint Cosmetics" className="lc-logo" />
      <Slider {...sliderSettings}>
        <div className="lc-slider__item">
          <img
            src="/assets/img/So-Blushing.jpg"
            alt="So Blushing"
            className="lc-slider__img"
          />
        </div>
        <div className="lc-slider__item">
          <img src="/assets/img/Danny.jpg" alt="Danny" className="lc-slider__img" />
        </div>
        <div className="lc-slider__item">
          <img
            src="/assets/img/Malowanie.jpg"
            alt="Malowanie"
            className="lc-slider__img"
          />
        </div>
        <div className="lc-slider__item">
          <img src="/assets/img/David.jpg" alt="David" className="lc-slider__img" />
        </div>
        <div className="lc-slider__item">
          <img src="/assets/img/Hialex.jpg" alt="Hialex" className="lc-slider__img" />
        </div>
        <div className="lc-slider__item">
          <img src="/assets/img/Louther.jpg" alt="Louther" className="lc-slider__img" />
        </div>
      </Slider>
      <div className="lc-text">
        <p>August 2020</p>
        <p>
          Pro Artist Tools
          <br />
          Coming Soon
        </p>
      </div>
    </div>

    // <div className="lc-wrapper lc-container ">
    //   <img src="/assets/img/LINT_Logo.svg" alt="Lint Cosmetics" className="lc-logo " />
    //   <div className="lc-slider ">
    //     <div className="lc-slider__item">
    //       <img
    //         src="/assets/img/So-Blushing.jpg"
    //         alt="So Blushing"
    //         className="lc-slider__img"
    //       />
    //     </div>
    //   </div>
    //   <div className="lc-text ">
    //     <p>2020</p>
    //     <p>
    //       Pro Artist Tools
    //       <br />
    //       Coming Soon
    //     </p>
    //   </div>
    // </div>
  );
};

export default Home;
