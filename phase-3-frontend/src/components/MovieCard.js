import React from "react";


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
      <div className="background" style={sectionStyle}></div>
    </div>
  )
}

export default MovieCard;