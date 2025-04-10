import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import HomePage from "../Home/HomePage";
function Login() {
  const navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
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

  const [error, setError] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://zerodhabackend-2cdq.onrender.com/login", formData, {
        withCredentials: true,
      });
      if (res.data.message === "Login success") {
        toast.success("Login Success! Redirecting..");
        setisLoggedIn(true);
        setTimeout(() => {
          window.location.href = "https://dashboard-zerodhatrading.onrender.com";
        }, 4000);
      } else {
        toast.error("Invalid username or password.");
        setFormData({ username: "", password: "" });
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      setFormData({ username: "", password: "" });
    }
  };

  return (
    <>
      {isLoggedIn ? <HomePage/> : (
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-4 p-3 mx-auto shadow">
              <div className="text-center my-5">
                <div className="mb-4">
                  <img
                    src="img/logo.png"
                    className="img-fluid"
                    height={"50px"}
                    width={"50px"}
                    alt="kite-logo"
                  />
                </div>
                <h4 className="mb-3">Login to Kite</h4>

                {/* 🚨 Show error if login fails */}
                {error && (
                  <div className="alert alert-danger py-2">{error}</div>
                )}

                <form
                  className="form-group mx-auto"
                  onSubmit={handleFormSubmit}
                >
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Enter Username"
                      className="form-control"
                      name="username"
                      value={formData.username}
                      onChange={(e) => {
                        setFormData({ ...formData, username: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="form-control"
                      name="password"
                      value={formData.password}
                      onChange={(e) => {
                        setFormData({ ...formData, password: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <button className="btn btn-primary w-100">Login</button>
                </form>

                <Link className="mt-3 nav-link text-center" to="/signup">
                  Doesn't have an account? Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
