import React from "react";

function Navbar() {
  return (
    <div className="navbar-container">
      <div>
        <input type="text" placeholder="Search City or Zip Code"></input>
        <button>
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
