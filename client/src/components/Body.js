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

  fetch(
    "https://community-open-weather-map.p.rapidapi.com/find?type=link%252C%20accurate&units=imperial%252C%20metric&q=houston",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "a33dbf3860mshed978d16591075cp11af79jsnb0093867fdd3",
      },
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
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
      <div className="weather-details">
        <h2>Weather Today in Houston, TX</h2>
        <span className="inline-span">
          <h1>92&#176;</h1>
          <p>Feels Like</p>
        </span>
        <hr id="hr"></hr>
        <span className="w-details-container">
          <div className="column-container">
            <span className="inline-block-detail">
              <p>
                <i
                  class="fa fa-thermometer-empty icons-details"
                  aria-hidden="true"
                ></i>
                High / Low
              </p>
              <p>--78&#176;</p>
            </span>
            <hr></hr>
            <span className="inline-block-detail">
              <p>
                <i class="fa fa-tint icons-details" aria-hidden="true"></i>
                Humidity
              </p>
              <p>80%</p>
            </span>
            <hr></hr>
            <span className="inline-block-detail">
              <p>
                <i
                  class="fa fa-arrow-down icons-details"
                  aria-hidden="true"
                ></i>
                Pressure
              </p>
              <p>29.96 in</p>
            </span>
            <hr></hr>
            <span className="inline-block-detail">
              <p>
                <i class="fa fa-eye icons-details" aria-hidden="true"></i>
                Visibility
              </p>
              <p>10 mi</p>
            </span>
          </div>
          <div className="column-container">
            <span className="inline-block-detail">
              <p>
                <i class="fa fa-plane icons-details" aria-hidden="true"></i>Wind
              </p>
              <p className="p-tag-details">26 mph</p>
            </span>
            <hr></hr>
            <span className="inline-block-detail">
              <p>
                <i class="fa fa-tint icons-details" aria-hidden="true"></i>Dew
                Point
              </p>
              <p className="p-tag-details">76&#176;</p>
            </span>
            <hr></hr>
            <span className="inline-block-detail">
              <p>
                <i class="fa fa-sun-o icons-details" aria-hidden="true"></i>UV
                Index
              </p>
              <p className="p-tag-details">0 of 10</p>
            </span>
            <hr></hr>
            <span className="inline-block-detail">
              <p>
                <i class="fa fa-moon-o icons-details" aria-hidden="true"></i>
                Moon Phase
              </p>
              <p className="p-tag-details">Waning Gibous</p>
            </span>
          </div>
        </span>
      </div>
    </>
  );
}

export default Body;
