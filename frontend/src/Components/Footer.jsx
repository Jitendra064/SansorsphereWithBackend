import React from "react";

import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="row container-fluid">
        <div className="col-md-4 col-sm-10 ">
          <div className="mt-3">
            <h1>SanorSphere</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              libero sunt mollitia quam earum aliquam ea, similique laborum
              corporis. Perspiciatis possimus voluptatum rerum aliquam error!z
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-10 jk89i">
          <div className="mt-3 ">
            <h1>Latest News</h1>
            <p className="p78v">
              <img src="./img/card_img-1.jpeg" width="70px" alt="" />
              <br />
              this is the new image on the site on configer
            </p>
            <p className="p78v">
              <img src="./img/card_img-1.jpeg" width="70px" alt="" />
              <br />
              this is the new image on the site on configer
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-10 d-flex justify-content-evenly">
          <div className=" FooterQuickLink mt-3">
            <h3>Quick Links</h3>
            <Link>
              <Link to="/">Home</Link>
            </Link>
            <Link to="/about">AboutUs</Link>

            <Link to="/products">Products</Link>
            <Link to="/faq">FAQ's</Link>

            <Link>ContactUs</Link>
          </div>
          <div className=" FooterQuickLink mt-3">
            <h3>Other Links</h3>
            <li>Privacy Notice</li>
            <li>Terms Of USe</li>
            <li>Security</li>
            <li>Blog</li>
            <li>Services Status</li>
          </div>
        </div>
      </div>
      <div className="FooterEnd">
        <p>
          ©2024.| Designed By: Jitendra Saini(MERN Stack).| All rights
          reserved...
        </p>
      </div>
    </div>
  );
};

export default Footer;
