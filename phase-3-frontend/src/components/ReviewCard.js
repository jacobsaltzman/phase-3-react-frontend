import React, { useState } from 'react';


function ReviewCard({review, onDeleteReview, onEditReview}){

  const {id, movie_id, user_id, comments, user_rating, scare_scale} = review;
  const [isEditMode, setIsEditMode] = useState(true);
  const [formData, setFormData] = useState();

  //deleted fetch requests for movie title and user names. Need to fix the nested json data coming in to grab those items using only the origin fetch and appropriate methods


  function handleEditMode(){
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
    .then((updatedItems) => {
    onEditReview(updatedItems)
  });
  setFormData("")
  handleEditMode()
  alert("Edit complete.")
}


  return(
    <div className="review-card" id={id}>
      <button id='delete-review-button' type='submit' onClick={handleDeleteReview}>X</button>
      <h3 id={movie_id}>{review.title}</h3>
      <h4 id={user_id}>Reviewed by: </h4>
      
      {isEditMode? <p>{comments}</p> : <div><input onChange={handleChange} type='text' placeholder='Insert your new comment and submit!'></input><button type='submit' onClick={handleEditReviewClick}>Submit Update</button></div>}
      
      <button id='edit-review-button' type='submit'onClick={handleEditMode}>{isEditMode? 'edit?': 'nevermind!'}</button>
      <h5>User Rating: {user_rating}</h5>
      <h5>Scary Scale: {scare_scale}</h5>
      
    </div>
  )
}

export default ReviewCard;