// import react packages
import React from "react";

// import styles
import "./Home.scss";

const Home = () => {
  return (
    <div className="lc-wrapper">
      <img src="/assets/img/LINT_Logo.svg" alt="Lint Cosmetics" className="lc-logo" />
      <section className="lc-slider">
        <div className="lc-slider__item">
          <img
            src="/assets/img/So-Blushing.jpg"
            alt="So Blushing"
            className="lc-slider__img"
          />
        </div>
      </section>
      <section className="lc-text">
        <p>2020</p>
        <p>
          Pro Artist Tools
          <br />
          Coming Soon
        </p>
      </section>
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
