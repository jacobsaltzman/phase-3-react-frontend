import React from "react";
import ReviewContainer from "./ReviewContainer";


function Reviews({ reviews }){

  return(
    <div id='main-review-list'>
      <h2>Check out the latest reviews.</h2>
      <ReviewContainer reviews={reviews}/>
    </div>
  )


}

export default Reviews;