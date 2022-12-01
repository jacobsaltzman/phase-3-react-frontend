import { React, useState } from "react";


function Home( { onAddUser }){

  const [pwShown, setPwShown] = useState(false);

  const togglePassword = (e) => {
    e.preventDefault();
    setPwShown(!pwShown)
  }

  const[formData, setFormData] = useState({
    email: "",
    username: "",
    password: ""
  })

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData((formData) => ({...formData, [name]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/users", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify(formData)
  })
      .then((r) => r.json())
      .then((data) => {
        onAddUser(data)
        setFormData({
          email: "",
          username: "",
          password: ""
        });
      });
      alert("Added to User Base! Login Functionality Coming in Phase 4!");
  };

 


  return (
    <section>
      <h2>A scary movie DB.</h2>
      <div id="sign-up">
      <h4>Sign Up</h4>
      <form  id="sign-up-form" onSubmit={handleSubmit}>
        <label>Email: </label>
        <input type='email' name='email' onChange={handleChange} value={formData.email}></input>
      <label>Username: </label>
      <input type='text' name='username' onChange={handleChange} value={formData.username}></input>
      <div>
      <label>Password: </label>
      <input type={pwShown ? "text" : "password"} name='password' onChange={handleChange} value={formData.password}></input>
      <button id="pw-button" onClick={togglePassword}>{pwShown ? "🙈" : '👀'}</button>
      </div>
      <button type="submit">Create New User</button>
      </form>
      </div>
    </section>
  )

}

export default Home;