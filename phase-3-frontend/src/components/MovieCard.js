import React from "react";

function MovieCard({movie}){

  const { id, title, director, year, subgenre, image } = movie;

  return(
    <div className="card" id={id}>
      <h3>{title}</h3>
      <iframe src={image} className="movie-image" allowFullScreen title={title}></iframe>
      <h4>Directed by: {director}</h4> 
      <p>{title} is a {subgenre} horror movie, originally released in {year}</p>
      <button id="review-button">Add a Review!</button>
    </div>
  )
}

export default MovieCard;