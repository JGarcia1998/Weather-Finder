import React from "react";
import { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { connect } from "react-redux";

function Body(props) {
  const [location, setLocation] = useState({});
  const [info, setInfo] = useState({});
  const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_KEY;

  function getGeo() {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
  }

  useEffect(() => {
    getGeo();

    if (location.lat === undefined || location.long === undefined) {
      return;
    }

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (props.searchedCity == null) {
          setInfo(result);
        } else {
          setInfo(props.searchedCity);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location.lat, location.long, setInfo, props.searchedCity]);

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
      <div className="grid-block-container">
        <div className="city-weather">
          <div className="info-container">
            <h2>{info.name || "Loading..."} Weather</h2>
            <p>as of 12:00 pm CDT</p>
            <h1>
              {parseInt((info.main?.temp * 9) / 5 + 32) || "Loading..."}&#176;
            </h1>
            <h2 className="title-case">
              {(info.weather && info.weather[0].description) || "Loading..."}
            </h2>
            <h3>10% chance of rain through 11pm</h3>
          </div>

          <div className="cloud-degree">
            <i class="fa fa-cloud" aria-hidden="true"></i>
            --/{info.main?.humidity}&#176;
          </div>
        </div>
        <div className="todays-forecast">
          <h2>Today's Forecast for {info.name || "Loading..."}</h2>
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
        <div className="advertisements">
          <p>Advertisement</p>
          <img src="ads.png" />
          <img src="ad2.png" />
          <button>See Details</button>
        </div>
        <div className="second-col-container">
          <h2>Air Quality Index</h2>
          <div className="mod-container">
            <span className="index">58</span>

            <div className="para-mod">
              <span className="mod">Moderate</span>
              <div>
                Air quality is acceptable; however, for some pollutants there
                may be a moderate health concern for a very small number of
                people who are unusually sensitive to air pollution.
              </div>
            </div>
          </div>
          <button>More Details</button>
        </div>

        <div className="radar-map-container">
          <h1>Radar</h1>
          <LoadScript googleMapsApiKey={GOOGLE_KEY}>
            <GoogleMap
              className="google-map"
              mapContainerStyle={mapStyles}
              zoom={5}
              center={defaultCenter}
            />
          </LoadScript>
        </div>
        <div className="a1-container">
          <h2>Weather Today in {info.name || "Loading..."}</h2>
          <div className="row-container">
            <div className="inline-span">
              <span className="degree-span">
                {(info.main &&
                  parseInt((info.main["feels_like"] * 9) / 5 + 32)) ||
                  "Loading..."}
                &#176;
              </span>
              <p className="feels-like">Feels Like</p>
            </div>
            <img src="earth.jpg" />
          </div>
          <div className="weather-details">
            <div className="w-details-container">
              <div className="column-container">
                <div className="inline-block-detail">
                  <i
                    class="fa fa-thermometer-empty icons-details"
                    aria-hidden="true"
                  ></i>
                  <span>High / Low</span>
                  <span className="weather-info">--78&#176;</span>
                </div>

                <div className="inline-block-detail">
                  <i class="fa fa-tint icons-details" aria-hidden="true"></i>
                  <span>Humidity</span>
                  <span className="weather-info">
                    {(info.main && info.main.humidity) || ""}%
                  </span>
                </div>

                <div className="inline-block-detail">
                  <i
                    class="fa fa-arrow-down icons-details"
                    aria-hidden="true"
                  ></i>
                  <span>Pressure</span>
                  <span className="weather-info">
                    {info.main?.pressure || ""}
                  </span>
                </div>

                <div className="inline-block-detail">
                  <i class="fa fa-eye icons-details" aria-hidden="true"></i>
                  <span>Visibility</span>
                  <span className="weather-info">{info.visibility || ""}</span>
                </div>
              </div>

              <div className="column-container">
                <div className="inline-block-detail">
                  <i class="fa fa-plane icons-details" aria-hidden="true"></i>
                  <span>Wind</span>
                  <span className="weather-info">
                    {info.wind?.speed || ""} mph
                  </span>
                </div>

                <div className="inline-block-detail">
                  <i class="fa fa-tint icons-details" aria-hidden="true"></i>
                  <span>Dew Point</span>
                  <span className="weather-info">76&#176;</span>
                </div>

                <div className="inline-block-detail">
                  <i class="fa fa-sun-o icons-details" aria-hidden="true"></i>
                  <span>UV Index</span>
                  <span className="weather-info">0 of 10</span>
                </div>

                <div className="inline-block-detail">
                  <i class="fa fa-moon-o icons-details" aria-hidden="true"></i>
                  <span>Moon</span>
                  <span className="weather-info">Waning Gibbus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top-stories-container">
          <h2>Top Stories</h2>
          <div className="stories-flex">
            <img src="https://s.w-x.co/ddayyy.jpg" />
            <p>Tracking all the active systems</p>
            <img src="https://cdn.abcotvs.com/dip/images/5791875_122719-kgo-box-truck-ax-img_Image_10-35-58,26.jpg?w=1600" />
            <p>Dozens of trucks topple on highway</p>
          </div>
        </div>
        <div className="ad6-bottom-container">
          <p>Advertisement</p>
          <img src="ad6.png" />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    searchedCity: state.searchedCity,
  };
};

export default connect(mapStateToProps, null)(Body);
