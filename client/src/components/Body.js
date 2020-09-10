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
      <div className="grid-block-container">
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
          <button>See Details</button>
        </div>
        ; ;
        <div className="radar-map-container">
          <h1>Radar</h1>
          <LoadScript googleMapsApiKey="AIzaSyC4sXFApb5UYtwwfG-FGcrqUAzWGJJEdAk">
            <GoogleMap
              className="google-map"
              mapContainerStyle={mapStyles}
              zoom={5}
              center={defaultCenter}
            />
          </LoadScript>
        </div>
        <div className="a1-container">
          <h2>Weather Today in Houston, TX</h2>
          <div className="inline-span">
            <span className="degree-span">92&#176;</span>
            <p className="feels-like">Feels Like</p>
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
                  <span className="weather-info">80%</span>
                </div>

                <div className="inline-block-detail">
                  <i
                    class="fa fa-arrow-down icons-details"
                    aria-hidden="true"
                  ></i>
                  <span>Pressure</span>
                  <span className="weather-info">29.96 in</span>
                </div>

                <div className="inline-block-detail">
                  <i class="fa fa-eye icons-details" aria-hidden="true"></i>
                  <span>Visibility</span>
                  <span className="weather-info">10 mi</span>
                </div>
              </div>

              <div className="column-container">
                <div className="inline-block-detail">
                  <i class="fa fa-plane icons-details" aria-hidden="true"></i>
                  <span>Wind</span>
                  <span className="weather-info">26 mph</span>
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
        <div className="ad6-bottom-container">
          <p>Advertisement</p>
          <img src="ad6.png" />
        </div>
      </div>
    </>
  );
}

export default Body;
