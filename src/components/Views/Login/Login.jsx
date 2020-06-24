// import react packages
import React from "react";

// import components
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import SignIn from "../../SignIn/SignIn";
import SignUp from "../../SignUp/SignUp";

// import styles
import "./Login.scss";

const Login = () => {
  return (
    <>
      <Header />
      <div className="bx--grid bx--grid--full-width lc-login">
        <div className="bx--row">
          <div className="bx--col">
            <h1 className="lc-type__header__h1 lc-type__header__h1--bold">
              Your Lint Account
            </h1>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col-sm-4 bx--col-lg-6">
            <SignIn />
          </div>
          <div className="bx--col-sm-4 bx--col-lg-6">
            <SignUp />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
