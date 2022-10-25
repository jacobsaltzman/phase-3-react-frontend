import React from "react";

function ReviewCard({review}){

  const {id} = review;

  return(
    <div className="review-card" id={id}>
      <h3>This movie.</h3>
    </div>
  )
}

export default ReviewCard;