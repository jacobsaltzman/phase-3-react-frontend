import React from "react";
import ReviewCard from './ReviewCard'

function ReviewContainer({reviews, onDeleteReview}){

  return(
    <ul className="review-container">
      {reviews.map((review) => {
        return (
          <ReviewCard
          key={review.id}
          review={review}
          onDeleteReview={onDeleteReview}
          />
        )
      })}
    </ul>
  )
}

export default ReviewContainer;