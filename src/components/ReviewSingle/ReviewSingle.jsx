// import react packages
import React from "react";

// import styles
import "./ReviewSingle.scss";

const ReviewSingle = () => {
  return (
    <div className="lc-review-single">
      <div className="lc-review-single__rating">
        <span className="lc-review-single__rating__star lc-review-single__rating__star--selected">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fill="#B4B4B4"
              fill-rule="evenodd"
              d="M8 0L6.022 5.982 0 6.111 4.8 9.938 3.056 16 8 12.382 12.944 16 11.2 9.938 16 6.111 9.978 5.982z"
            />
          </svg>
        </span>
        <span className="lc-review-single__rating__star lc-review-single__rating__star--selected">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fill="#B4B4B4"
              fill-rule="evenodd"
              d="M8 0L6.022 5.982 0 6.111 4.8 9.938 3.056 16 8 12.382 12.944 16 11.2 9.938 16 6.111 9.978 5.982z"
            />
          </svg>
        </span>
        <span className="lc-review-single__rating__star lc-review-single__rating__star--selected">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fill="#B4B4B4"
              fill-rule="evenodd"
              d="M8 0L6.022 5.982 0 6.111 4.8 9.938 3.056 16 8 12.382 12.944 16 11.2 9.938 16 6.111 9.978 5.982z"
            />
          </svg>
        </span>
        <span className="lc-review-single__rating__star lc-review-single__rating__star--selected">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fill="#B4B4B4"
              fill-rule="evenodd"
              d="M8 0L6.022 5.982 0 6.111 4.8 9.938 3.056 16 8 12.382 12.944 16 11.2 9.938 16 6.111 9.978 5.982z"
            />
          </svg>
        </span>
        <span className="lc-review-single__rating__star lc-review-single__rating__star--selected">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fill="#B4B4B4"
              fill-rule="evenodd"
              d="M8 0L6.022 5.982 0 6.111 4.8 9.938 3.056 16 8 12.382 12.944 16 11.2 9.938 16 6.111 9.978 5.982z"
            />
          </svg>
        </span>
      </div>
      <div className="lc-review-single__header">
        <h3 className="lc-type__body__b5 lc-type__body__b5--bold">Review Header</h3>
      </div>
      <div className="lc-review-single__member">
        <p className="lc-type__meta__s1 ">Member - 00/00/2020</p>
      </div>
      <div className="lc-review-single__review lc-type__body__b2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatem porro
        totam recusandae aliquid culpa, facere molestiae laudantium explicabo quaerat. Quo
        fuga reiciendis iusto repellendus quas commodi possimus earum dolorum!
      </div>
    </div>
  );
};

export default ReviewSingle;
