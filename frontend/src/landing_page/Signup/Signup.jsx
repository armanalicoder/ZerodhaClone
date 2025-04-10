import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import HomePage from "../Home/HomePage";
function Signup() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    axios
      .get("http://localhost:8000/userAuthenticate", { withCredentials: true })
      .then((res) => {
        if (res.data.authenticated) {
          // Already logged in, redirect to dashboard
          toast.success("You've already logged in redirecting .");
          setisLoggedIn(true);
          setTimeout(() => {
            window.location.href = "http://localhost:5174";
          }, 4000);
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/signup", formData);
      if (res.data.user != undefined) {
        toast.success("Signup successfull ! Redirecting to Login page..");
        setisLoggedIn(true);
        setTimeout(() => {
          window.location.href = "http://localhost:5173/login";
        }, 3000);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      {isLoggedIn ? <HomePage/> : (
        <section>
          <div className="row my-4">
            <div className="col-sm-12 text-center p-5">
              <h1 className="fs-1">
                Open a free demat and trading account online
              </h1>
              <p className="fs-4">
                Start investing brokerage free and join a community of 1.5+
                crore investors and traders
              </p>
            </div>
          </div>
          <div className="row p-3">
            <div className="col-sm-6">
              <img
                src="img/signup.svg"
                className="img-fluid"
                alt="signup-image"
              />
            </div>
            <div className="col-sm-6">
              <div>
                <h2>Signup now</h2>
                <p className="fs-5">On track your existing application</p>
              </div>
              <form onSubmit={handleFormSubmit}>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-white" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Enter your Username"
                    aria-label="username"
                    aria-describedby="basic-addon1"
                    name="username"
                    onChange={(e) => {
                      setFormData({ ...formData, username: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control p-3"
                    placeholder="Enter your Email id"
                    aria-label="email"
                    aria-describedby="basic-addon1"
                    name="email"
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control p-3"
                    placeholder="Create a Password"
                    aria-label="password"
                    aria-describedby="basic-addon1"
                    name="password"
                    onChange={(e) => {
                      setFormData({ ...formData, password: e.target.value });
                    }}
                    required
                  />
                </div>
                <button className="btn btn-primary p-3 w-100">Sign up</button>
              </form>
              <Link to="/login" className="nav-link mt-2 text-center">
                Already have an account?Login
              </Link>

              <p className="mt-2">
                By proceeding, you agree to the Zerodha terms & privacy policy
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Signup;
