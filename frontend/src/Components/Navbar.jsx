/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navbar.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const [loggedId, setLoggedId] = useState(null);

  const RemoveLoggedUser = () => {
    axios
      .delete(`http://localhost:1300/user/deleteloggeduser/${loggedId}`)
      .then((res) => {
        props.setloginuser(false);
        toast.success("Account Logout");
      })
      .catch((error) => console.log("RemoveLoggedUser error is ", error));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:1300/user/getloggeduser`)
      .then((res) => {
        setLoggedId(res.data[0]?._id);
      })
      .catch((error) => console.log("RemoveLoggedUser error is ", error));
  });

  return (
    <>
      <div className="navbar-header ">
        <Toaster position="top-center" reverseOrder={true} />

        <div className="nav-left">
          <Link to="/">
            <p>SanorSpare</p>
          </Link>
        </div>
        <div className="nav-right ">
          <p className="navbar-right-item">
            <Link to="/">
              <li className="navbar-right-itemlink">Home</li>
            </Link>
            <Link to="/about">
              <li className="navbar-right-itemlink">AboutUs</li>
            </Link>
            <Link to="/products">
              <li className="navbar-right-itemlink">Products</li>
            </Link>
            <Link to="/faq">
              <li className="navbar-right-itemlink">FAQ'S</li>
            </Link>

            <button onClick={RemoveLoggedUser}>LogOut</button>
          </p>
        </div>

        {/*
        
        
        Phone width ke liye offcanvas added 
        
        
        */}
        <div className="nav-right-new">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/sf-black/64/FFFFFF/menu.png"
            alt="menu"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          />
          <div
            className="offcanvas offcanvas-start bg-dark text-light"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            {" "}
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                Offcanvas
              </h5>
              <div>
                <img
                  type="button"
                  width="30"
                  height="30"
                  src="https://img.icons8.com/external-flat-icons-inmotus-design/67/FFFFFF/external-Close-antivirus-flat-icons-inmotus-design.png"
                  alt="external-Close-antivirus-flat-icons-inmotus-design"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  className="btn-close text-reset text-light"
                />
              </div>
            </div>
            <div className="offcanvas-body">
              <div className="offcanasbody">
                <Link to="/">Home</Link>
                <Link to="/about">about</Link>
                <Link to="/products">Products</Link>
                <Link to="/faq">FAQ's</Link>
                <p
                  to="/login"
                  onClick={RemoveLoggedUser}
                  style={{ cursor: "pointer" }}
                >
                  logOut
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
