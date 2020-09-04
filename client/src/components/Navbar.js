import React from "react";
import { useState } from "react";

function Navbar() {
  const [Class, setClass] = useState("fa fa-bars");
  // "fa fa-times" "fa fa-bars"
  const changeClass = () => {
    if (Class == "fa fa-bars") {
      setClass("fa fa-times");
    } else {
      setClass("fa fa-bars");
    }
  };

  return (
    <>
      <div className="navbar-container">
        <img src="logo192.png"></img>

        <div className="navbar-children">
          <input type="text" placeholder="Search City or Zip Code" />
          <button>
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <div className="bars-icon">
          <button onClick={changeClass}>
            <i class={Class} aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="navbar-opening">
        <ul className="listing-container">
          {" "}
          WEATHER
          <li>National Forecast</li>
          <li>Monthly Forecast</li>
          <li>Early Forecast</li>
          <li>Daily Forecast</li>
          <li>National News</li>
          <li>Almanac</li>
        </ul>
        <ul className="listing-container">
          {" "}
          RADAR
          <li>Weather in Motion</li>
          <li>Radar Maps</li>
          <li>Classic Weather Maps</li>
          <li>Regional Satellite</li>
        </ul>
        <ul className="listing-container">
          {" "}
          SEVERE
          <li>Sever Alerts</li>
          <li>Safety & Prepardness</li>
          <li>Hurricane Control</li>
        </ul>
        <ul className="listing-container">
          {" "}
          VIDEO & PHOTOS
          <li>Top Stories</li>
          <li>Video</li>
          <li>Slideshows</li>
          <li>Climate News</li>
          <li>Award-Winning Investigations</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
