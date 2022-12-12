import React from "react";

const Genres = (props) => {
  const {
    genres,
    handleGenre,
    getAllMovies,
    allMvCount,
    comedyCount,
    actionCount,
    documentaryCount,
    fantasyCount,
    tensionCount,
    horrorCount,
  } = props;
  return (
    <React.Fragment>
      <button
        className="genresBtn animate__animated animate__fadeIn"
        onClick={() => getAllMovies()}
      >
        All Movies
      </button>
      {genres.map((gnr, index) => {
        return (
          <button
            className="genresBtn animate__animated animate__fadeIn"
            onClick={() => handleGenre(gnr)}
            key={index}
            id={gnr + "B"}
          >
            {gnr}
          </button>
        );
      })}
      <div className="counts animate__animated animate__fadeIn">
        <span id="allMvCount">{allMvCount()}</span>
        <span id="comedyCount">{comedyCount()}</span>
        <span id="actionCount">{actionCount()}</span>
        <span id="documentaryCount">{documentaryCount()}</span>
        <span id="fantasyCount">{fantasyCount()}</span>
        <span id="tensionCount">{tensionCount()}</span>
        <span id="horrorCount">{horrorCount()}</span>
      </div>
    </React.Fragment>
  );
};

export default Genres;
