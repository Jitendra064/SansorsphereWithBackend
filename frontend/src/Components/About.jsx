import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div>
      <div className="aboutHeading">
        <h1 className=" my-4">About</h1>
      </div>
      <div className="aboutimges">
        <img src="./img/about-grid-1.jpg" alt="" />
        <img src="./img/about-grid-2.jpg" alt="" />
        <img src="./img/about-grid-3.jpg" alt="" />
        <img src="./img/about-grid-4.jpg" alt="" />
        <img src="./img/about-grid-5.jpg" alt="" />
        <img src="./img/about-grid-6.jpg" alt="" />
      </div>
      <div>
        <h2 className="text-center text-primary my-3">
          Every Business Needs Great Content
        </h2>
      </div>

      <div className="row  justify-content-evenly my-5  container-fluid">
        <div className="col-lg-4  col-md-5  firstimgcol">
          <img src="./img/about-1.jpg" alt="" />
        </div>
        <div className="col-lg-4 col-md-5  firsttextcol ">
          <div className="">
            <h3>Our Mission</h3>
            <p>
              Our mission is to empower individuals and businesses with advanced
              sensor technology that enhances safety, efficiency, and
              productivity. We strive to provide accurate and reliable sensor
              solutions that enable our customers to monitor and analyze
              environmental conditions, detect changes, and make informed
              decisions.
            </p>
          </div>
        </div>
      </div>
      <div className="row  justify-content-evenly my-5  container-fluid">
        <div className="col-lg-4  col-md-5 firsttextcol">
          <div className="">
            <h3>Our Mission</h3>
            <p>
              Our mission is to empower individuals and businesses with advanced
              sensor technology that enhances safety, efficiency, and
              productivity. We strive to provide accurate and reliable sensor
              solutions that enable our customers to monitor and analyze
              environmental conditions, detect changes, and make informed
              decisions.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 firstimgcol">
          <img src="./img/about-2.jpg" alt="" />
        </div>
      </div>
      <div className="row  justify-content-evenly my-5  container-fluid">
        <div className="col-lg-4  col-md-5  firstimgcol">
          <img src="./img/about-3.jpg" alt="" />
        </div>
        <div className="col-lg-4 col-md-5  firsttextcol">
          <div className="">
            <h3>Our Mission</h3>
            <p>
              Our mission is to empower individuals and businesses with advanced
              sensor technology that enhances safety, efficiency, and
              productivity. We strive to provide accurate and reliable sensor
              solutions that enable our customers to monitor and analyze
              environmental conditions, detect changes, and make informed
              decisions.
            </p>
          </div>
        </div>
      </div>
      <div className="row  justify-content-evenly my-5 container-fluid">
        <div className="col-lg-4  col-md-5 firsttextcol">
          <div className="">
            <h3>Our Mission</h3>
            <p>
              Our mission is to empower individuals and businesses with advanced
              sensor technology that enhances safety, efficiency, and
              productivity. We strive to provide accurate and reliable sensor
              solutions that enable our customers to monitor and analyze
              environmental conditions, detect changes, and make informed
              decisions.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 firstimgcol">
          <img src="./img/about-4.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
