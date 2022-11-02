import React from 'react';


function ReviewCard({review, onDeleteReview}){

  const {id, movie_id, user_id, comments, user_rating, scare_scale} = review;

  const handleDeleteReview = (e) => {
    e.preventDefault();

    fetch(`http://localhost:9292/reviews/${review.id}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        },
    })
    .then((response) => response.json())
    .then((data) => onDeleteReview(data));
}


  

  return(
    <div className="review-card" id={id}>
      <button type='submit' onClick={handleDeleteReview}>X</button>
      <h3>{movie_id}</h3>
      <h4>{user_id}</h4>
      <p>{comments}</p>
      <h5>{user_rating}</h5>
      <h6>{scare_scale}</h6>
      
    </div>
  )
}

export default ReviewCard;