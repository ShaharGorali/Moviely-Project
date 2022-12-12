import React, { useState, useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Movie = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const { mv, deleteMv } = props;


  return (
    <div id={mv.id} className="Movie animate__animated animate__fadeIn">
      {!isOpen ? (
        <img onClick={() => setIsOpen(true)} src={mv.img} alt="" />
      ) : (
        <></>
      )}
      <h5>{mv.name}</h5>
      {isOpen ? (
        <div className="mvData">
          <p>Length: {mv.length} hrs</p>
          <p>Genre: {mv.genre}</p>
          <p>Rating: {mv.rating}</p>
          <div className="movieBtns">
            <button onClick={() => deleteMv(mv.id)} className="btn btn-danger">
              Delete
            </button>
            <button className="btn btn-light" onClick={() => setIsOpen(false)}>
              Close
            </button>
            <div onClick={() => setIsFav(!isFav)} className="heartBtn">
              {isFav ? (
                <FavoriteIcon fontSize="large" id={"heart " + mv.id} />
              ) : (
                <FavoriteBorderIcon fontSize="large" id={"heart " + mv.id} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Movie;
