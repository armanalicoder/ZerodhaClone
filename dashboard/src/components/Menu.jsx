import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Menu = ({ userData }) => {
  const handlelogout =async()=>{
   
      await axios.get('https://zerodhabackend-2cdq.onrender.com/logout',{withCredentials:true}).then((res)=>{
        if(res.data.success){
          alert("Logout Successfully!")
          window.location.href="http://localhost:5173";
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  return (
    <>
    <div className="d-flex justify-content-between"style={{width:"100%"}}>
      <div className="my-auto ms-3">
        <Link to="/">
          <img src="logo.png" alt="kite-logo" className="img-fluid" height={"50px"} width={"50px"}/>
        </Link>
      </div>
      <div className="me-5">
        <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {userData?.username}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/orders">
                    See Order
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/holdings">
                    See Holdings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/positions">
                    See Positions
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/funds">
                    Available Funds
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/apps">
                    Other Apps
                  </Link>
                </li>
                <li>
                  <button onClick={handlelogout} className="bg-danger text-white p-2 ms-2 border border-0 rounded-2">Logout</button>
                </li>
              </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Menu;
