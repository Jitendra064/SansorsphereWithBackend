/* eslint-disable react/jsx-no-undef */
/* eslint-disable array-callback-return */
import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Login = (props) => {
  const [inputEmail, SetInputEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [submit, setsubmit] = useState(false);
  const [error, setError] = useState({});

  // when user login then

  const AddLoggesUser = (loginDetails) => {
    axios
      .post("http://localhost:1300/user/postloggeduser", loginDetails)
      .then((res) => {
        props.setloginuser(true);
        console.log("Create Logged user ", res.data);
      })
      .catch((error) => console.log("loogedUser Error  ", error));
  };

  // login checking with code
  const LoginCheckHandler = () => {
    axios
      .get("http://localhost:1300/user/getuserData")
      .then((res) => {
        const loggedUser = res.data;
        loggedUser.map((user) => {
          if (user.email === inputEmail && user.password === Password) {
            console.log("looged user ", user);
            const loginDetails = {
              username: user.username,
              email: user.email,
            };
            AddLoggesUser(loginDetails);
            props.setloginuser(false);
            toast.success("Login Successfully!");
          }
        });
      })
      .catch((error) => console.log("GetUserData error is  ", error));
  };

  // from validation and error Handling
  const handleSubmit = (e) => {
    e.preventDefault();
    const varify = () => {
      let valid = true;

      let errorHandler = {
        Email: {
          errorStatus: false,
          errorDetail: "",
        },
        password: {
          errorStatus: false,
          errorDetail: "",
        },
      };

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
        errorHandler.password.errorDetail = "Password must be 4 char's";
        valid = false;
      }

      setError(errorHandler);
      return valid;
    };
    setsubmit(true);
    // eslint-disable-next-line no-undef
    if (varify()) {
      // login check in axios
      LoginCheckHandler();

      // toast.success(" Login Successfully!");

      SetInputEmail("");
      setPassword("");
    } else {
      toast.error("Something went wrong");
    }
  };

  // useEffect(() => {
  // axios
  //   .get(`http://localhost:1300/user/getloggeduser`)
  //   .then((res) => {
  //     setLoggedId(res.data[0]?._id);
  //   })
  //   .catch((error) => console.log("RemoveLoggedUser error is ", error));
  // RemoveLoggedUser();
  // props.setloginuser(false);
  // });

  return (
    <>
      <div className="OuterLoginForm">
        <Toaster position="top-center" reverseOrder={true} />

        <form className="formPageCss">
          <h1>LogIn</h1>

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
          <div className="d-flex justify-content-between align-items-center">
            <button type="submit" onClick={handleSubmit}>
              login
            </button>
            <Link to="/signup" className="RenderNewPage">
              Create New Account
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
