import React from "react";

const Pagination = (props) => {
  const { movieView, pagFunc, moviesList } = props;
  let pages = [];
  console.log(Math.ceil(moviesList.length / movieView));
  for (let i = 1; i <= Math.ceil(moviesList.length / movieView); i++) {
    pages.push(i);
  }
  pages = pages.map((page, index) => {
    return (
      <button className="btn btn-dark" onClick={() => pagFunc(page)} key={index}>
        {page}
      </button>
    );
  });
  return <div>{pages}</div>;
};

export default Pagination;
