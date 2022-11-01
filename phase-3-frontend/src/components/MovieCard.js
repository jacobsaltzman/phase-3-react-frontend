import React from "react";
import { Link } from "react-router-dom";

function MovieCard({movie}){

  const { id, title, director, year, subgenre, image } = movie;

  const sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundAttachment: "fixed",
    backgroundPosition: "center"
  }

  return(
    <div className="card" id={id}>
      <div className="background" style={sectionStyle}></div>
      <h1>{title}</h1>
      <h3>Directed by: {director}</h3> 
      <p>{title} is a {subgenre} horror movie, originally released in {year}</p>
      <Link to="review/new" id="review-button">Add A Review</Link>
      <div className="background" style={sectionStyle}></div>
    </div>
  )
}

export default MovieCard;