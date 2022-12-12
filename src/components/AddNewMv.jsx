import React, { Component } from "react";
import { redirect } from "react-router-dom";
import Header from "./Header";
class AddNewMv extends Component {
  state = {};
  name = React.createRef();
  length = React.createRef();
  genre = React.createRef();
  rating = React.createRef();
  img = React.createRef();
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="mainForm">
          <div className="formHeader">
            <h2>Add new movies, ratings and reviews</h2>
          </div>
          <form
            className="formSpace"
            onSubmit={(e) => this.handleSubmit(e)}
            action=""
          >
            <div className="mb-3">
              <input
                className="form-control"
                required
                ref={this.name}
                type="text"
                placeholder="Movie Name"
              />
              <input
                className="form-control"
                required
                ref={this.length}
                type="text"
                placeholder="Movie Length (Hrs: Mns)"
              />
              <select
                className="form-control"
                required
                ref={this.genre}
                name="selectGenre"
                id="selectGenre"
              >
                <option value="">Select Genre</option>
                <option value="Comedy">Comedy</option>
                <option value="Action">Action</option>
                <option value="Documentary">Documentary</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Tension">Tension</option>
                <option value="Horror">Horror</option>
              </select>
              <input
                className="form-control"
                required
                ref={this.rating}
                type="number"
                min={0}
                max={10}
                placeholder="Rating"
              />
              <input
                className="form-control"
                required
                ref={this.img}
                type="text"
                placeholder="Image URL"
              />
              <button id="addForm" className="btn btn-primary">
                Add Movie
              </button>
              <button id="clearForm" className="btn btn-dark">
                Clear
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.name.current.value;
    const length = this.length.current.value;
    const genre = this.genre.current.value;
    const rating = this.rating.current.value;
    const img = this.img.current.value;
    let newMv = {
      id: this.props.moviesList.length,
      name: name,
      length: length,
      genre: genre,
      rating: rating,
      img: img,
    };
    this.props.addNew(newMv);

    this.name.current.value = "";
    this.length.current.value = "";
    this.genre.current.value = "";
    this.rating.current.value = "";
    this.img.current.value = "";
    return redirect("/");
  };
}

export default AddNewMv;
