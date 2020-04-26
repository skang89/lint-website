// import react packages
import React from "react";

// import styles
import "./Home.scss";

const Home = () => {
  return (
    <div className="lc-wrapper">
      <img src="/assets/img/LINT_Logo.svg" alt="Lint Cosmetics" className="lc-logo" />
      <section className="lc-slider">
        <img
          src="/assets/img/So-Blushing.jpg"
          alt="So Blushing"
          className="lc-slider__img"
        />
      </section>
    </div>
  );
};

export default Home;
