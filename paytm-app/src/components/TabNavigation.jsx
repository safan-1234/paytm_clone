import React from "react";
import "./TabNavigation.css";
import logo from "../assets/paytm.png";

const TabNavigation = () => {
  return (
    <div className="tab-navigation">
      <img src={logo} alt="Logo" className="logo" />
      <div className="tab active-tab">Home</div>
      <div className="tab">Flights</div>
      <div className="tab">Hotels</div>
      <div className="tab">Offers</div>
    </div>
  );
};

export default TabNavigation;
