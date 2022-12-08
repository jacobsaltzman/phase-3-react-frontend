import React from "react";
import ReviewContainer from "./ReviewContainer";


function Reviews({ reviews, onDeleteReview, onEditReview }){

  const total = reviews.length

  return(
    <div id='main-review-list'>
      <h2>Check out the latest reviews.</h2>
      {reviews.length?<h3>There are {total} reviews for this movie!</h3>:<h4>no reviews yet...</h4>}
      <ReviewContainer reviews={reviews} onDeleteReview={onDeleteReview} onEditReview={onEditReview}/>
    </div>
  )


}

export default Reviews;