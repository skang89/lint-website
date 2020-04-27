// import react packages
import React from "react";

// import styles
import "./Home.scss";

const Home = () => {
  return (
    <div className="lc-wrapper">
      <section className="lc-logo__container">
        <img
          src="/assets/img/LINT_Logo.svg"
          alt="Lint Cosmetics"
          className="lc-logo__logo"
        />
      </section>
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
  );
};

export default Home;
