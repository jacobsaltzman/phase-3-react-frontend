import React, {useState} from "react";


function NewMovieForm({ onAddMovie }){

  const[formData, setFormData] = useState({
    title: "",
    director: "",
    type: "",
    year: "",
    comments: "",
    image: "",
    user_rating: "",
    rotton_percentage: ""
  })

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData((formData) => ({...formData, [name]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/test", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify(formData)
  })
      .then((r) => r.json())
      .then((data) => {
        onAddMovie(data)
        setFormData({
          title: "",
          director: "",
          type: "",
          year: "",
          comments: "",
          image: "",
          user_rating: 0,
          rotton_percentage: "",
          scare_scale: 0
        });
      });
      alert("Added to the Movies DB! Thanks for contributing");
  };

  return (
    <section>
      <h3>Is there a new movie or a gem we missed?!</h3>
      <p>It can be challenging to keep up with every new movie or finding solid classics... <br/>Adding new movies to our site helps our users learn more about new and interesting movies!</p>
      <form className="new-movie-form" onSubmit={handleSubmit}>
        <h3>Add New Movie</h3>

        <label>Title</label>
        <input type="text" id="title" name="title" onChange={handleChange} value={formData.title}/>

        <label>Director</label>
        <input type="text" id="director" name="director" onChange={handleChange} value={formData.director}/>

        <label>Subgenre</label>
        <select name="type" id="type" onChange={handleChange} value={formData.type}>
          <option>Select One</option>
          <option value="Paranormal">Paranormal</option>
          <option value="Slasher">Slasher</option>
          <option value="Psychological">Psychological</option>
          <option value="Comedy">Comedy</option>
          <option value="SciFi">Sci-fi</option>
          <option value="Gore">Gore</option>
          <option value="Monster">Monster</option>
          <option value="Mystery">Mystery/Thriller</option>
          <option value="FF">Found Footage</option>
          <option value="Other">Other</option>
        </select>

        <label>Year</label>
        <input type="number" id="year" name="year" onChange={handleChange} value={formData.year}/>

        <label>Comments</label>
        <textarea onChange={handleChange} value={formData.comments}/>

        <label>Image URL</label>
        <input type="text" id="image" name="image" onChange={handleChange} value={formData.image}></input>


        <button type="submit">Add Movie</button>
      </form>
    </section>
  )

}

export default NewMovieForm;