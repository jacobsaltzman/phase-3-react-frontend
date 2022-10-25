import React from "react";

function ReviewCard({review}){

  const {id, movie_id, user_id, comments, user_rating, scare_scale} = review;

  return(
    <div className="review-card" id={id}>
      <h3>{movie_id}</h3>
      <h4>{user_id}</h4>
      <p>{comments}</p>
      <h5>{user_rating}</h5>
      <h6>{scare_scale}</h6>
    </div>
  )
}

export default ReviewCard;