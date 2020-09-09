import React from "react";

function Footer(props) {
  return (
    <>
      <div className="footer-container">
        <div className="first-f-container">
          <span>Feedback</span>
          <span>Careers</span>
          <span>Download</span>
          <span>Apps</span>
          <span>Press</span>
          <span>Advertise</span>
          <span>TV</span>
        </div>

        <br />
        <div className="second-f-container">
          <span>Terms of use</span>
          <span>Privacy Policy</span>
          <span>Ad Choices</span>
          <span>Ad Partners</span>
          <span>Analytics Partners</span>
        </div>

        <br />
        <img className="ad5" src="ad5.png" />
        <br />
        <div className="p-container">
          <span>
            We recognize our responsibility to use data and technology for good.
            Take control of your data.
          </span>
        </div>
        <br />
        <div className="third-container">
          <span>Privacy Settings</span>
          <span>Review My Settings</span>
          <span>Data Rights</span>
        </div>
        <br />
        <span id="copyright-tag">
          © Copyright TWC Product and Technology LLC 2014, 2020
        </span>
      </div>
    </>
  );
}

export default Footer;
