/* eslint-disable no-undef */
import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [inputName, SetInputName] = useState("");
  const [inputEmail, SetInputEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  const [submit, setsubmit] = useState(false);
  const [error, setError] = useState({});
  // const [response, setResponse] = useState({});

  const newuser = {
    username: inputName,
    email: inputEmail,
    password: Password,
    confirm_password: Cpassword,
  };

  const signupHandler = () => {
    axios
      .post("http://localhost:1300/user/postuserData", newuser)
      .then((res) => toast.success(" Signup Successfully"))
      .catch((error) => console.log("post Error is", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const varify = () => {
      let valid = true;

      let errorHandler = {
        firstName: {
          errorStatus: false,
          errorDetails: "",
        },
        Email: {
          errorStatus: false,
          errorDetail: "",
        },
        password: {
          errorStatus: false,
          errorDetail: "",
        },
        cPassword: {
          errorStatus: false,
          errorDetail: "",
        },
      };

      if (inputName.length === 0) {
        errorHandler.firstName.errorStatus = true;
        errorHandler.firstName.errorDetail = "Name must be required";
        valid = false;
      } else if (inputName.length < 4) {
        errorHandler.firstName.errorStatus = true;
        errorHandler.firstName.errorDetail =
          "Name must be at least 4 characters";
        valid = false;
      }

      if (inputEmail.length === 0) {
        errorHandler.Email.errorStatus = true;
        errorHandler.Email.errorDetail = "Email must be required";
        valid = false;
      } else if (!inputEmail.endsWith("@gmail.com")) {
        errorHandler.Email.errorStatus = true;
        errorHandler.Email.errorDetail = "Please Enter Right Email";
        valid = false;
      }

      if (Password.length === 0) {
        errorHandler.password.errorStatus = true;
        errorHandler.password.errorDetail = "Password must be required";
        valid = false;
      } else if (Password.length !== 4) {
        errorHandler.password.errorStatus = true;
        errorHandler.password.errorDetail = "Password must be 4 characters";
        valid = false;
      }

      if (Cpassword.length === 0) {
        errorHandler.cPassword.errorStatus = true;
        errorHandler.cPassword.errorDetail =
          "Confirm password must be required";
        valid = false;
      } else if (Cpassword.length !== 4) {
        errorHandler.cPassword.errorStatus = true;
        errorHandler.cPassword.errorDetail =
          "Confirm password must be 4 characters";
        valid = false;
      }

      if (!(Password === Cpassword)) {
        errorHandler.cPassword.errorStatus = true;
        errorHandler.cPassword.errorDetail =
          " ! Confirm password not match  please Enter Right Password";
        valid = false;
      }

      setError(errorHandler);
      return valid;
    };
    setsubmit(true);
    // eslint-disable-next-line no-undef
    if (varify()) {
      // send data in database
      signupHandler();

      // toast.success(" Signup Successfully");
      navigate("/login");
      SetInputName("");
      SetInputEmail("");
      setPassword("");
      setCPassword("");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="OuterSignupForm">
        <Toaster position="top-center" reverseOrder={true} />

        <form className="formPageCss">
          <h1>Registration</h1>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail0" className="form-label">
              Full Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail0"
              aria-describedby="emailHelp"
              value={inputName}
              onChange={(e) => SetInputName(e.target.value)}
            />
            <p className="text-danger">
              {submit &&
                error.firstName.errorStatus &&
                `${error.firstName.errorDetail}`}
            </p>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={inputEmail}
              onChange={(e) => SetInputEmail(e.target.value)}
            />
            <p className="text-danger">
              {submit &&
                error.Email.errorStatus &&
                `${error.Email.errorDetail}`}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-danger">
              {submit &&
                error.password.errorStatus &&
                `${error.password.errorDetail}`}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword3" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword3"
              value={Cpassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
            <p className="text-danger">
              {submit &&
                error.cPassword.errorStatus &&
                `${error.cPassword.errorDetail}`}
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button type="submit" onClick={handleSubmit}>
              Sign in
            </button>
            <Link
              to="/login"
              className="RenderNewPage "
              style={{ lineHeight: "0px" }}
            >
              I have Already Account
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
