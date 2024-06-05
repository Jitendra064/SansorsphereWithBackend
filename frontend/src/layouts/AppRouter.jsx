import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { publicRoutes, privateRouter } from "../route/routes";
import Login from "../Pages/Login";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";

function AppRouter() {
  const [loginuser, setloginuser] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:1300/user/getloggeduser")
      .then((res) => setloginuser(res.data[0]))
      .catch((Error) => console.log(Error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BrowserRouter>
        {loginuser && (
          <>
            <Navbar setloginuser={setloginuser} />
            <Routes>
              {privateRouter.map((e, i) => (
                <Route path={e.path} element={<e.element />} key={i} />
              ))}
              <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
          </>
        )}
        {!loginuser && (
          <>
            <Routes>
              {publicRoutes.map((e, i) => (
                <Route
                  path={e.path}
                  element={<e.element setloginuser={setloginuser} />}
                  key={i}
                />
              ))}
              <Route path="*" element={<Login setloginuser={setloginuser} />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
