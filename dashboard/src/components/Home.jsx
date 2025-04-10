import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./Topbar";
import axios from "axios";
import { toast } from "react-toastify";

function Home() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:8000/userAuthenticate", { withCredentials: true })
      .then((res) => {
        if (res.data.authenticated) {
          setUserData(res.data.user);
        } else {
          alert("you aren't logged in.")
          setTimeout(() => {
            window.location.href = "http://localhost:5173";
          }, 1000);
        }
        setLoading(false);
      })
      .catch((err) => {
        alert("Something Went Wrong !")
        setTimeout(() => {
          window.location.href = "http://localhost:5173";
        }, 2000);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {userData ? (
        <div>
          <TopBar userData={userData} />
          <Dashboard userData={userData} />
        </div>
      ) : null}
    </>
  );
}

export default Home;
