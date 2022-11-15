import React, { useState, useEffect } from 'react';

function ReviewStats({id}){

  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch(`http://localhost:9292/movies/${id}`)
      .then((r) => r.json())
      .then((data)=> setReviews(data))
  }, [id])

  console.log(reviews)

  return(
    <div>
      Check check!
    </div>
  )

}

export default ReviewStats;