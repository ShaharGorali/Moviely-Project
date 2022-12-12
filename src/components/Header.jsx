import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <div className="Header">
      <div className="hIcons">
        <NavLink to={"/moviely"}>
          <HomeIcon id="homeBtn" fontSize="large" />
        </NavLink>
        <div onClick={()=> alert('Liked Movies Coming soon...')} id="myLikesBtn">
          <FavoriteIcon id="likeH" fontSize="large" />
        </div>
        <div onClick={()=> {alert('About Us Coming soon...')}}>
          
          <MenuBookIcon id="aboutUsBtn" fontSize="large" />
        </div>
        <NavLink id="addMvBtn" to={"/moviely/addnewmovie"}>
          Add Movie+
        </NavLink>
      </div>
      <div id="logoSpace">
        <h1 id="logo">Moviely</h1>
      </div>
      <div className="selectH">
        <select
          className="form-select form-select-sm selectIn"
          onChange={(e) => props.moviesOnScreen(e)}
          name="moviesOnScreen"
          id="selectScreen"
        >
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>{" "}
        <label id="labelMvScr" htmlFor="moviesOnScreen">
          Movies on screen
        </label>
      </div>
    </div>
  );
};

export default Header;
