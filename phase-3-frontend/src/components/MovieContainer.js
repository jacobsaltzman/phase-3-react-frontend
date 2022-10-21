import React from "react";
import MovieCard from "./MovieCard";

function MovieContainer({movies}){

  return(
    <ul className="container">
      {movies.map((movie) => {
        return (
          <MovieCard
          key={movie.id}
          movie={movie}
          />
        )
      })}
    </ul>
  )
}

export default MovieContainer;