import React from "react";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-children">
        <input type="text" placeholder="Search City or Zip Code" />
        <button>
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
