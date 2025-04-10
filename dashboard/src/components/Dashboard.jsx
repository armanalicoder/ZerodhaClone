import React from "react";
import { Route, Routes } from "react-router-dom";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Dashboard = ({userData}) => {
  return (
    <>
      {userData ? (
        <div className="dashboard-container">
          <GeneralContextProvider>
            <WatchList />
          </GeneralContextProvider>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Summary userData={userData} />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/positions" element={<Positions />} />
              <Route path="/funds" element={<Funds />} />
              <Route path="/apps" element={<Apps />} />
            </Routes>
          </div>
        </div>
      ) : (
        <p className="text-dark">Loading...</p>
      )}
    </>
  );
};

export default Dashboard;
