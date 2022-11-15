import React, { useState } from 'react';


function MovieCard({movie}){

  const [isSeen, setIsSeen] = useState(true);

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

  function handleIsSeen(e){
    setIsSeen(!isSeen)
  }

  return(
    <div className="card" id={id}>
      <div className="background" style={sectionStyle}></div>
      <h1>{title}</h1>
      <h3>Directed by: {director}</h3> 
      <p>{title} is a {subgenre} horror movie, originally released in {year}</p>
      <button onClick={handleIsSeen}>{isSeen? 'More Info':'Less info'}</button>
      <div id='more-info'>
      </div>
      <div className="background" style={sectionStyle}></div>
    </div>
  )
}

export default MovieCard;