import React from "react";

function MovieCard({movie}){

  const { id, title, director, year, subgenre, image } = movie;

  return(
    <div className="card" id={id}>
      <h3>{title}</h3>
      <iframe src={image} className="movie-image" allowFullScreen title={title}></iframe>
      <h4>Directed by: {director}</h4> 
      <button id="delete-button">Remove from List</button>
      <p>{title} is a {subgenre} horror movie, originally released in {year}</p>
    </div>
  )
}

export default MovieCard;