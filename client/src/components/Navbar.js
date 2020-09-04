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
  );
}

export default Navbar;
