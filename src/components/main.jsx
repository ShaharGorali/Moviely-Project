import React, { Component } from "react";
import Movies from "./movies";
import Header from "./Header";
import Footer from "./footer";
import AddNewMv from "./AddNewMv";
import LikedMv from "./LikedMv";
import { constMoviesList } from "../../src/movieData/moviesData";
import { Route, Routes } from "react-router-dom";
import { changeData } from "../movieData/moviesData";
import { set } from "react-hook-form";
import Pagination from "./Pag";
import Welcome from "./Welcome";
class Main extends Component {
  state = {
    moviesList: [
      {
        id: 1,
        name: "Harry Potter",
        length: "2:30",
        genre: "Fantasy",
        rating: 9.3,
        img: "https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg",
        liked: false,
      },
      {
        id: 2,
        name: "Fast & Forious",
        length: "2:45",
        genre: "Action",
        rating: 7.7,
        img: "https://upload.wikimedia.org/wikipedia/en/8/8f/Fast_and_Furious_Poster.jpg",
        liked: false,
      },
      {
        id: 3,
        name: "Memento",
        length: "2:01",
        genre: "Tension",
        rating: 9.4,
        img: "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
        liked: false,
      },
      {
        id: 4,
        name: "Batman",
        length: "2:55",
        genre: "Action",
        rating: 9.2,
        img: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
        liked: false,
      },
      {
        id: 5,
        name: "Venum",
        length: "2:18",
        genre: "Action",
        rating: 7.5,
        img: "https://images.moviesanywhere.com/631ce712afb20d255c8ceaa0eee01a3f/91673de8-1a03-44d8-bb31-3334d170f171.jpg",
        liked: false,
      },
      {
        id: 6,
        name: "Spiderman",
        length: "2:55",
        genre: "Action",
        rating: 9.4,
        img: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
        liked: false,
      },
      {
        id: 7,
        name: "Deadpool",
        length: "2:31",
        genre: "Action",
        rating: 8.8,
        img: "https://lumiere-a.akamaihd.net/v1/images/image_8c4aa72b.jpeg",
        liked: false,
      },
      {
        id: 8,
        name: "Borat",
        length: "2:22",
        genre: "Comedy",
        rating: 8.2,
        img: "https://m.media-amazon.com/images/M/MV5BMTk0MTQ3NDQ4Ml5BMl5BanBnXkFtZTcwOTQ3OTQzMw@@._V1_.jpg",
        liked: false,
      },
      {
        id: 9,
        name: "The Dictator",
        length: "3:14",
        genre: "Comedy",
        rating: 7.7,
        img: "https://collider.com/wp-content/uploads/dictator-movie-image-sacha-baron-cohen-hi-res-01.jpg",
        liked: false,
      },
      {
        id: 10,
        name: "American Pie",
        length: "2:53",
        genre: "Comedy",
        rating: 6.1,
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3523/35231985_sa.jpg",
        liked: false,
      },
      {
        id: 11,
        name: "Ronaldo",
        length: "2:00",
        genre: "Documentary",
        rating: 6.6,
        img: "https://m.media-amazon.com/images/M/MV5BNzMyMTM1MjQxNF5BMl5BanBnXkFtZTgwMjY4NTE5NjE@._V1_.jpg",
        liked: false,
      },
      {
        id: 12,
        name: "Waltz with Bashir",
        length: "1:30",
        genre: "Documentary",
        rating: 9.1,
        img: "https://m.media-amazon.com/images/M/MV5BNjM2OTI3NzQyNl5BMl5BanBnXkFtZTcwNjkzNzQ5MQ@@._V1_.jpg",
        liked: false,
      },
      {
        id: 13,
        name: "Hallelujah",
        length: "2:00",
        genre: "Documentary",
        rating: 8.1,
        img: "https://m.media-amazon.com/images/M/MV5BNjQ4NjY1NTg0MF5BMl5BanBnXkFtZTcwNTA2NjEzMQ@@._V1_FMjpg_UX1000_.jpg",
        liked: false,
      },
      {
        id: 14,
        name: "It",
        length: "2:15",
        genre: "Horror",
        rating: 7.4,
        img: "https://i.pinimg.com/originals/c1/ef/bf/c1efbf83210255b1f1ff393947d4759e.jpg",
        liked: false,
      },
      {
        id: 15,
        name: "The Conjuring",
        length: "2:28",
        genre: "Horror",
        rating: 6.7,
        img: "https://m.media-amazon.com/images/I/81Z7PowQQDL._AC_SL1500_.jpg",
        liked: false,
      },
    ],
    genres: ["Comedy", "Action", "Documentary", "Fantasy", "Tension", "Horror"],
    movieView: 4,
    pageIndex: 1,
  };

  render() {
    return (
      <div className="Main">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route
            path="/moviely"
            element={
              <Movies
                moviesList={this.state.moviesList}
                deleteMv={(mvId) => this.deleteMovie(mvId)}
                genres={this.state.genres}
                handleGenre={(gnr) => this.handleGenre(gnr)}
                getAllMovies={() => this.getAllMovies()}
                allMvCount={() => this.allMvCount()}
                comedyCount={() => this.comedyCount()}
                actionCount={() => this.actionCount()}
                documentaryCount={() => this.documentaryCount()}
                fantasyCount={() => this.fantasyCount()}
                tensionCount={() => this.tensionCount()}
                horrorCount={() => this.horrorCount()}
                pageIndex={this.state.pageIndex}
                movieView={this.state.movieView}
                pagFunc={(pageIndex) => this.pagFunc(pageIndex)}
                moviesOnScreen={(e) => this.moviesOnScreen(e)}
              />
            }
          ></Route>
          <Route
            path="/moviely/addnewmovie"
            element={
              <AddNewMv
                addNew={(obj) => this.addNew(obj)}
                moviesList={this.state.moviesList}
              />
            }
          ></Route>
          <Route path="/moviely/likedmovies" element={<LikedMv />}></Route>
        </Routes>
        {/* <Footer /> */}
      </div>
    );
  }
  filteredArr = [];

  deleteMovie = (mvId) => {
    const moviesList = constMoviesList.filter((mv) => mv.id !== mvId);
    this.filteredArr = moviesList;
    this.setState({ moviesList });
    changeData(this.filteredArr);
  };
  handleGenre = (gnr) => {
    if (this.filteredArr.length === 0) {
      let moviesData = constMoviesList;
      moviesData = moviesData.filter((m) => m.genre.includes(gnr));
      this.setState({ moviesList: moviesData });
    } else {
      let moviesData = this.filteredArr;
      moviesData = moviesData.filter((m) => m.genre.includes(gnr));
      console.log(moviesData);
      // moviesData.filter((m) => m.genre.includes(gnr));
      console.log(gnr);
      this.setState({ moviesList: moviesData });
    }
    console.log(this.filteredArr);
  };
  getAllMovies = () => {
    if (this.filteredArr.length === 0) {
      this.setState({ moviesList: constMoviesList });
    } else {
      this.setState({ moviesList: this.filteredArr });
    }
    // this.setState.state({ filteredYet: false });
  };
  addNew = (obj) => {
    this.state.moviesList.push(obj);
    constMoviesList.push(obj);
    this.setState({ moviesList: this.state.moviesList });
  };
  allMvCount = () => {
    return constMoviesList.length;
  };
  comedyCount = () => {
    let comedy = constMoviesList.filter((mv) => mv.genre == "Comedy");
    return comedy.length;
  };
  actionCount = () => {
    let action = constMoviesList.filter((mv) => mv.genre == "Action");
    return action.length;
  };
  documentaryCount = () => {
    let documentary = constMoviesList.filter((mv) => mv.genre == "Documentary");
    return documentary.length;
  };
  fantasyCount = () => {
    let fantasy = constMoviesList.filter((mv) => mv.genre == "Fantasy");
    return fantasy.length;
  };
  tensionCount = () => {
    let tension = constMoviesList.filter((mv) => mv.genre == "Tension");
    return tension.length;
  };
  horrorCount = () => {
    let horror = constMoviesList.filter((mv) => mv.genre == "Horror");
    return horror.length;
  };
  pagFunc = (pageIndex) => {
    this.setState({ pageIndex });
  };
  moviesOnScreen = (e) => {
    const value = e.target.value;
    this.setState({ movieView: value });
    console.log(value);
  };
}

export default Main;
