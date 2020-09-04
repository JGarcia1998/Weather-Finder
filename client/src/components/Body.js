import React from "react";

function Body() {
  return (
    <>
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
    </>
  );
}

export default Body;
