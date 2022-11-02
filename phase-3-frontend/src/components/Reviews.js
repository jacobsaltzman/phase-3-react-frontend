import React from "react";
import ReviewContainer from "./ReviewContainer";


function Reviews({ reviews, onDeleteReview }){

  return(
    <div id='main-review-list'>
      <h2>Check out the latest reviews.</h2>
      <ReviewContainer reviews={reviews} onDeleteReview={onDeleteReview}/>
    </div>
  )


}

export default Reviews;