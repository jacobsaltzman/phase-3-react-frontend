import React, { useState, useEffect } from 'react';


function ReviewCard({review, onDeleteReview}){

  const {id, movie_id, user_id, comments, user_rating, scare_scale} = review;
  const [isEditMode, setIsEditMode] = useState(true);
  const [reviewTitle, setReviewTitle] = useState();
  const [reviewUser, setReviewUser] = useState();
  const [formData, setFormData] = useState();


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
  function handleChange(e) {
    const value = e.target.value;
    setFormData(value)
    console.log(value)
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
  // console.log(review.id)
  fetch(`http://localhost:9292/reviews/${review.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
        comments: formData
    }),
  })
    .then((r) => r.json())
    .then((updatedItems) => console.log(updatedItems));
    
}




  

  return(
    <div className="review-card" id={id}>
      <button id='delete-review-button' type='submit' onClick={handleDeleteReview}>X</button>
      <h3 id={movie_id}>{reviewTitle}</h3>
      <h4 id={user_id}>Reviewed by: {reviewUser}</h4>
      
      {isEditMode? <p>{comments}</p> : <div><input onChange={handleChange} type='text' placeholder='Insert your new comment and submit!'></input><button type='submit' onClick={handleEditReviewClick}>Submit Update</button></div>}
      
      <button id='edit-review-button' type='submit'onClick={handleEditMode}>{isEditMode? 'edit?': 'nevermind!'}</button>
      <h5>User Rating: {user_rating}</h5>
      <h5>Scary Scale: {scare_scale}</h5>
      
    </div>
  )
}

export default ReviewCard;