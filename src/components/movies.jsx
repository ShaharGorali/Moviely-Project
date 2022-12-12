import React, { useState } from "react";
import Movie from "./movie";
import Genres from "./genres";
import Pagination from "./Pag";
import Header from "./Header";

const Movies = (props) => {
  const {
    moviesList,
    deleteMv,
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
    pageIndex,
    movieView,
    pagFunc,
    moviesOnScreen
  } = props;
  const [navOpen, setNavOpen] = useState(false);
  const lastPostIndex = props.pageIndex * props.movieView;
  const firstPostIndex = lastPostIndex - props.movieView;
  let temp = moviesList.slice(firstPostIndex, lastPostIndex);

  return (
    <React.Fragment>
      <Header moviesOnScreen={moviesOnScreen} />
      <div className="Movies">
        <div className="mvNavbar">
          <button onClick={() => setNavOpen(!navOpen)} className="navBtns">
            MENU
          </button>
          {navOpen ? (
            <div className="navContent">
              <Genres {...props} />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="allMoviesDiv">
          {temp.map((mv) => {
            return <Movie key={mv.id} mv={mv} deleteMv={deleteMv} />;
          })}
        </div>
        <div className="pagBtn" role="group" aria-label="First group">
          <Pagination
            moviesList={moviesList}
            movieView={movieView}
            pagFunc={(pageIndex) => pagFunc(pageIndex)}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Movies;
