import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function Navbar(props) {
  const [Class, setClass] = useState("fa fa-bars");
  const [showMenu, setShowMenu] = useState(false);
  const [city, setCity] = useState("");

  // "fa fa-times" "fa fa-bars"
  const changeClass = () => {
    if (Class == "fa fa-bars") {
      setClass("fa fa-times");
      setShowMenu(true);
    } else {
      setClass("fa fa-bars");
      setShowMenu(false);
    }
  };
  const handleOnChange = (e) => {
    setCity(e.target.value);
  };

  const handleOnClick = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4ff7a9eb54cbfc41fbee3f16492a9bc0`
    )
      .then((result) => result.json())
      .then((res) => {
        props.onSetSearch(res);
      });
  };

  return (
    <>
      <div className="navbar-container">
        <img className="react-logo" src="logo192.png" />

        <div className="navbar-children">
          <input
            onChange={handleOnChange}
            type="text"
            placeholder="Search City or Zip Code"
          />
          <button onClick={handleOnClick} className="navbar-btn">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <div className="globe-container">
          <i class="fa fa-globe" aria-hidden="true"></i>
          <p>US | &#176;F</p>
        </div>
        <div className="bars-icon">
          <button className="navbar-btn" onClick={changeClass}>
            <i class={Class} aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="navbar-container-b">
        <span>Today</span>
        <span>Hourly</span>
        <span>10 Day</span>
        <span>Weekend</span>
        <span>Monthly</span>
        <span>Radar</span>
        <span>Video</span>
        <span>More Forecasts</span>
      </div>

      {showMenu ? (
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
          <ul className="listing-container">
            {" "}
            HEALTH & ACTIVITIES
            <li>Allergy Tracker</li>
            <li>Cold & Flu</li>
            <li>Water Security</li>
            <li>Boat & Beach Forecast</li>
            <li>Gardening Forecast</li>
            <li>Ski Forecast</li>
          </ul>
          <ul className="listing-container">
            {" "}
            TV
            <li>Personalities</li>
            <li>Watch Live</li>
          </ul>
          <ul className="listing-container">
            {" "}
            Privacy
            <li>Privacy Settings</li>
            <li>Data Rights</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      ) : null}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetSearch: (arg) => dispatch({ type: "SETSEARCH", value: arg }),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
