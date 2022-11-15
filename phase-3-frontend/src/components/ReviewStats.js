import React, { useState, useEffect } from 'react';

function ReviewStats({id}){

  const [movie, setMovie] = useState();

  useEffect(() => {
    fetch(`http://localhost:9292/movies/${id}`)
      .then((r) => r.json())
      .then((data)=> setMovie(data))
  }, [id])

  console.log(movie)

  return(
    <div>
      Check check!
    </div>
  )

}

export default ReviewStats;