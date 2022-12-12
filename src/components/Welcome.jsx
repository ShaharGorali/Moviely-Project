import React from "react";
import { NavLink } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="welcomeSpace ">
      <div className="welcomeHeader">
        <h1 className="h1W animate__animated animate__fadeInBottomLeft">
          Welcome to moviely
        </h1>
      </div>
      <div className="welcomeInfo animate__animated animate__fadeIn">
        <h3>Find and share ratings and reviews for the newest movies</h3>
        <NavLink to={"/moviely"}>
          <button className="btn btn-outline-dark" id="continue">
            Contiue to Home Page
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Welcome;
