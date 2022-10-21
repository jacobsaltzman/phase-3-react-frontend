import React from "react";
import MovieContainer from "./MovieContainer";


function Movies({ movies }){

  return(
    <div id='main-movie-list'>
      <h2>The comprehensive list of horror movies.</h2>
      <MovieContainer movies={movies}/>
    </div>
  )


}

export default Movies;