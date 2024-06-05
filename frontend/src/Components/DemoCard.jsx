/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./DemoCard.css";

const DemoCard = (props) => {
  return (
    <>
      <div className="card  DemoCard">
        <img
          src={props.data?.Img}
          className="card-img-top"
          alt="..."
          style={{ height: "15rem" }}
        />
        <div className="card-body">
          {/* Title */}
          <h5 className="card-title mb-4">{props.data?.Title}</h5>
          {/* Description */}
          <p className="card-text">{props.data?.Text}</p>
          {/* Price */}
          <h5 className="mb-2 fst-italic">
            {props.data?.price}
            <span className="fw-light text-decoration-line-through">
              {" "}
              {props.data?.xprice}
            </span>
            <span className="text-success"> {props.data?.off}</span>
          </h5>
          <div className="DemoCardbtnHeader d-flex">
            <button className="DemoCardbtn">Buy Now</button>
            <button className="DemoCardbtn">Explore More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoCard;
