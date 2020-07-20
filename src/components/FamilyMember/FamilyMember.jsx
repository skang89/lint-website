// import react packages
import React, { useEffect } from "react";

// import styles
import "./FamilyMember.scss";

const FamilyMember = () => {
  useEffect(() => {
    const memberImage = document.querySelector(".lc-family-member__image img");
    const memberDetails = document.querySelectorAll(".lc-family-member__details");

    const resizeTriangle = () => {
      const triangleWidth = window
        .getComputedStyle(memberImage, null)
        .getPropertyValue("width");
      const triangleHeight = window
        .getComputedStyle(memberImage, null)
        .getPropertyValue("height");

      return memberDetails.forEach((member) => {
        return (
          member.setAttribute(
            "style",
            `width: ${triangleWidth}; height: ${triangleHeight};`
          ),
          member.classList.contains("lc-triangle__top-right")
            ? member.firstElementChild.setAttribute(
                "style",
                `border-width: 0 ${triangleWidth} ${triangleHeight} 0; border-color: transparent #000000 transparent transparent;`
              )
            : member.classList.contains("lc-triangle__bottom-right")
            ? member.firstElementChild.setAttribute(
                "style",
                `border-width: 0 0 ${triangleHeight} ${triangleWidth}; border-color: transparent transparent #000000 transparent;`
              )
            : member.classList.contains("lc-triangle__bottom-left")
            ? member.firstElementChild.setAttribute(
                "style",
                `border-width: ${triangleHeight} 0 0 ${triangleWidth}; border-color: transparent transparent transparent #000000;`
              )
            : member.classList.contains("lc-triangle__top-left")
            ? member.firstElementChild.setAttribute(
                "style",
                `border-width: ${triangleHeight} ${triangleWidth} 0 0; border-color: #000000 transparent transparent transparent ;`
              )
            : null
        );
      });
    };

    window.addEventListener("resize", resizeTriangle);
    window.onload = resizeTriangle;
  }, []);

  return (
    <>
      <div className="lc-family-member">
        <div className="bx--row">
          <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-6 lc-family-member__image">
            <picture>
              <source
                media="(max-width: 1055px)"
                srcSet="/assets/product/Placeholder_Mobile.png"
                alt="Order item"
              />
              <source
                media="(min-width: 1056px)"
                srcSet="/assets/product/Placeholder.png"
                alt="Order item"
              />
              <img src="/assets/product/Placeholder_Default.jpg" alt="Order item" />
            </picture>
          </div>
          <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-6 lc-family-member__details lc-triangle__top-right">
            <div className="lc-family-member__details--border"></div>
            <div className="lc-family-member__details__copy">
              <p className="lc-type__lint__fam lc-type__lint__fam--bold lc-type__lint__fam--light">
                Name
              </p>
              <p className="lc-type__lint__fam lc-type__lint__fam--light">@username</p>
              <p className="lc-type__lint__fam lc-type__lint__fam--light">location</p>
            </div>
          </div>
        </div>
        <div className="bx--row lc-flex__direction--reversed">
          <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-6 lc-family-member__image">
            <picture>
              <source
                media="(max-width: 1055px)"
                srcSet="/assets/product/Placeholder_Mobile.png"
                alt="Order item"
              />
              <source
                media="(min-width: 1056px)"
                srcSet="/assets/product/Placeholder.png"
                alt="Order item"
              />
              <img src="/assets/product/Placeholder_Default.jpg" alt="Order item" />
            </picture>
          </div>
          <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-6 lc-family-member__details lc-triangle__bottom-right">
            <div className="lc-family-member__details--border"></div>
            <div className="lc-family-member__details__copy">
              <p className="lc-type__lint__fam lc-type__lint__fam--bold lc-type__lint__fam--light">
                Name
              </p>
              <p className="lc-type__lint__fam lc-type__lint__fam--light">@username</p>
              <p className="lc-type__lint__fam lc-type__lint__fam--light">location</p>
            </div>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-6 lc-family-member__image">
            <picture>
              <source
                media="(max-width: 1055px)"
                srcSet="/assets/product/Placeholder_Mobile.png"
                alt="Order item"
              />
              <source
                media="(min-width: 1056px)"
                srcSet="/assets/product/Placeholder.png"
                alt="Order item"
              />
              <img src="/assets/product/Placeholder_Default.jpg" alt="Order item" />
            </picture>
          </div>
          <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-6 lc-family-member__details lc-triangle__bottom-left">
            <div className="lc-family-member__details--border"></div>
            <div className="lc-family-member__details__copy">
              <p className="lc-type__lint__fam lc-type__lint__fam--bold lc-type__lint__fam--light">
                Name
              </p>
              <p className="lc-type__lint__fam lc-type__lint__fam--light">@username</p>
              <p className="lc-type__lint__fam lc-type__lint__fam--light">location</p>
            </div>
          </div>
        </div>
        <div className="bx--row  lc-flex__direction--reversed">
          <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-6 lc-family-member__image">
            <picture>
              <source
                media="(max-width: 1055px)"
                srcSet="/assets/product/Placeholder_Mobile.png"
                alt="Order item"
              />
              <source
                media="(min-width: 1056px)"
                srcSet="/assets/product/Placeholder.png"
                alt="Order item"
              />
              <img src="/assets/product/Placeholder_Default.jpg" alt="Order item" />
            </picture>
          </div>
          <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-6 lc-family-member__details lc-triangle__top-left">
            <div className="lc-family-member__details--border"></div>
            <div className="lc-family-member__details__copy">
              <p className="lc-type__lint__fam lc-type__lint__fam--bold lc-type__lint__fam--light">
                Name
              </p>
              <p className="lc-type__lint__fam lc-type__lint__fam--light">@username</p>
              <p className="lc-type__lint__fam lc-type__lint__fam--light">location</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyMember;
