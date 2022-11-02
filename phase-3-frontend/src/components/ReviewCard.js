import React, { useState, useEffect } from 'react';


function ReviewCard({review, onDeleteReview}){

  const {id, movie_id, user_id, comments, user_rating, scare_scale} = review;
  const [isEditMode, setIsEditMode] = useState(true);
  const [reviewTitle, setReviewTitle] = useState();
  const [reviewUser, setReviewUser] = useState();


  useEffect(() => {
    fetch(`http://localhost:9292/reviews/${review.id}/movie`)
      .then((r) => r.json())
      .then((data)=> setReviewTitle(data))
  }, [review.id])

  useEffect(() => {
    fetch(`http://localhost:9292/reviews/${review.id}/user`)
      .then((r) => r.json())
      .then((data)=> setReviewUser(data))
  }, [review.id])

  function handleEditMode(e){
    setIsEditMode(!isEditMode)

  }

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

function handleEditReviewClick() {
  fetch(`http://localhost:4000/items/${review.id}/comments`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // isEditMode: !isEditMode,
    }),
  })
    .then((r) => r.json())
    .then((updatedItem) => console.log(updatedItem));
}




  

  return(
    <div className="review-card" id={id}>
      <button id='delete-review-button' type='submit' onClick={handleDeleteReview}>X</button>
      <h3 id={movie_id}>{reviewTitle}</h3>
      <h4 id={user_id}>Reviewed by: {reviewUser}</h4>
      {isEditMode? <p>{comments}</p> : <input type='text' placeholder='Insert your new comment and submit!'><button type='submit' onSubmit={handleEditReviewClick}>Submit Update</button></input>}
      <button id='edit-review-button' type='submit'onClick={handleEditMode}>{isEditMode? 'edit?': 'nevermind!'}</button>
      <h5>User Rating: {user_rating}</h5>
      <h5>Scary Scale: {scare_scale}</h5>
      
    </div>
  )
}

export default ReviewCard;