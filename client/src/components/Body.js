import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

function Body(props) {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 30.62237,
    lng: -96.325851,
  };
  return (
    <>
      <img className="adv" src="image1.png" />
      <div className="city-weather">
        <div className="info-container">
          <h2>Houston, TX Weather</h2>
          <p>as of 10:31 pm CDT</p>
          <h1>83&#176;</h1>
          <h2>Party Cloudy</h2>
          <h3>10% chance of rain through 11pm</h3>
        </div>

        <div className="cloud-degree">
          <i class="fa fa-cloud" aria-hidden="true"></i>
          --/76&#176;
        </div>
      </div>

      <div className="todays-forecast">
        <h2>Today's Forecast for Houston, TX</h2>
        <div className="forecast-container">
          <ul>
            <li>Morning</li>
            <li className="degrees">86&#176;</li>
            <i class="fa fa-cloud" aria-hidden="true"></i>
            <p className="percentages">10%</p>
          </ul>
          <div className="vl"></div>
          <ul>
            <li>Afternoon</li>
            <li className="degrees">95&#176;</li>
            <i class="fa fa-cloud" aria-hidden="true"></i>
            <p className="percentages">15%</p>
          </ul>
          <div className="vl"></div>
          <ul>
            <li>Evening</li>
            <li className="degrees">83&#176;</li>
            <i class="fa fa-cloud" aria-hidden="true"></i>
            <p className="percentages">15%</p>
          </ul>
          <div className="vl"></div>
          <ul>
            <li>Overnight</li>
            <li className="degrees">81&#176;</li>
            <i class="fa fa-cloud" aria-hidden="true"></i>
            <p className="percentages">8%</p>
          </ul>
        </div>
        <button className="next-hours">Next Hours</button>
      </div>
      <div className="radar-map-container">
        <h1>Radar</h1>
        <LoadScript googleMapsApiKey="AIzaSyC4sXFApb5UYtwwfG-FGcrqUAzWGJJEdAk">
          <GoogleMap
            className="google-map"
            mapContainerStyle={mapStyles}
            zoom={10}
            center={defaultCenter}
          />
        </LoadScript>
      </div>
    </>
  );
}

export default Body;
