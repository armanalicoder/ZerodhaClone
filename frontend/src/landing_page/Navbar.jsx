import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Navbar() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    axios
      .get("https://zerodhabackend-2cdq.onrender.com/userAuthenticate", { withCredentials: true })
      .then((res) => {
        if (res.data.authenticated) {
          setisLoggedIn(true);
          toast.success("You've already logged in redirecting .");
          setTimeout(() => {
            window.location.href = "https://dashboard-zerodhatrading.onrender.com";
          }, 4000);
        }
      })
      .catch((err) => {
       console.log(err)
      });
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-white">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="img/logo.svg"
              className="img-fluid"
              height={"150px"}
              width={"150px"}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              {isLoggedIn ? (
                <Link className="nav-link mx-3" aria-current="page" to="https://dashboard-zerodhatrading.onrender.com">
                  Dashboard
                </Link>
              ) : (
                <div className="d-flex">
                  <Link
                    className="nav-link mx-3"
                    aria-current="page"
                    to="/signup"
                  >
                    Signup
                  </Link>
                  <Link
                    className="nav-link mx-3"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
              )}
              <Link className="nav-link mx-3" to="/about">
                About
              </Link>
              <Link className="nav-link mx-3" to="/products">
                Products
              </Link>
              <Link className="nav-link mx-3" to="/pricing">
                Pricing
              </Link>
              <Link className="nav-link mx-3" to="/support">
                Support
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Navbar;
