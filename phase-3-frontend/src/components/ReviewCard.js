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
      <button id='delete-review-button' type='submit' onClick={handleDeleteReview}>X</button>
      <h3>{movie_id}</h3>
      <h4>Reviewed by: {user_id}</h4>
      <p>{comments}</p>
      <button id='edit-review-button' type='submit'>edit</button>
      <h5>User Rating: {user_rating}</h5>
      <h5>Scary Scale: {scare_scale}</h5>
      
    </div>
  )
}

export default ReviewCard;