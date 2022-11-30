import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ReviewStats({id}){

  const [reviews, setReviews] = useState();
  
  
  
  useEffect(() => {
     fetch(`http://localhost:9292/movies/${id}/reviews`)
      .then((r) => r.json())
      .then((data)=> setReviews(data)) 
  }, [id])
  
  if (reviews !== undefined){
    //console.log(reviews[1].user.username)
    
  return(
    <div>
     <h3>There are {reviews.length} reviews for this movie!</h3>
     <ul className='review-list'>
      {reviews.map((review) => {
        return(
          <li id={review.id} key={review.id}>"{review.comments}" - by {review.user.username}</li>
        )
      })}
     </ul>
     <Link to={{pathname: "review/new", state:{id} }} id="review-button">Add A Review</Link>
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