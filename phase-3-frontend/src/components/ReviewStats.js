import React, { useState, useEffect } from 'react';

function ReviewStats({id}){

  const [reviews, setReviews] = useState();
  
  
  
  useEffect(() => {
     fetch(`http://localhost:9292/movies/${id}/reviews`)
      .then((r) => r.json())
      .then((data)=> setReviews(data)) 
  }, [id])
  
  if (reviews !== undefined){

    console.log(reviews[1].comments)
  return(
    <div>
     <h3>There are {reviews.length} reviews for this movie!</h3>
     <ul>
      {reviews.map((review) => {
        return(
          <li id={review.id} key={review.id}>{review.comments}</li>
        )
      })}
     </ul>
    </div>
  )

  }
  else{
    return(
      <p>Loading review data...</p>
    )
  }
}

export default ReviewStats;