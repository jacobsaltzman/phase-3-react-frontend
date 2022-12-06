import React, {useState} from "react";
import Reviews from "./Reviews";


function ReviewStats({id, reviews}){

  const[allReviews, setAllReviews] = useState(reviews)

  
  const[formData, setFormData] = useState({
    movie_id: id, //need to fix to make more dynamic
    user_id: 2, //user is hard-coded to mimic login which will be next Phase
    comments: "",
    user_rating: 0,
    scare_scale: 0
  })

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData((formData) => ({...formData, [name]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/reviews", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify(formData)
  })
      .then((r) => r.json())
      .then((data) => {
        onAddReview(data)
        setFormData({
          movie_id: id, 
          user_id: 2, //hard-coded to mimic login functionality
          comments: "",
          user_rating: 0,
          scare_scale: 0
        });
      });
      alert("Added the Review! Thanks for contributing!");
  };
  
  function onAddReview(newReview){
    if (allReviews === undefined){
      const allReviews = []
      setAllReviews([...allReviews, newReview])
    }
    else { 
    setAllReviews([...allReviews, newReview])
    }
  }

  function onEditReview(updatedReview){
    const updatedReviews = allReviews.map((review) => {
      if (review.id === updatedReview.id) {
        return updatedReview;
      } else {
        return review;
      }
    });
    setAllReviews(updatedReviews);
  }

  function onDeleteReview(deletedReview) {
    const updatedReviews = allReviews.filter((review) => review.id !== deletedReview.id);
    setAllReviews(updatedReviews);
  }
  

  return(
    <div>
     <h3>There are {allReviews.length} reviews for this movie!</h3>
     <Reviews reviews={allReviews} onEditReview={onEditReview} onDeleteReview={onDeleteReview}/>
     <section>
      <form className="new-review-form" onSubmit={handleSubmit}>
        <h3>Add Review</h3>
        <label>Comments:
        <textarea id="comments" name="comments" onChange={handleChange} value={formData.comments}/>
        </label>
        <label>Overall Rating</label>
        <input type="number" id="user_rating" name="user_rating" onChange={handleChange} value={formData.user_rating}/>

        <label>Scare Scale</label>
        <input type="number" id="scare_scale" name="scare_scale" onChange={handleChange} value={formData.scare_scale}/>

        <button type="submit">Post Review</button>
      </form>
    </section>
    </div>
  )
}

export default ReviewStats;