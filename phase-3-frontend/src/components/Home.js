import { React, useState } from "react";


function Home(){

  const [pwShown, setPwShown] = useState(false);

  const togglePassword = (e) => {
    e.preventDefault();
    setPwShown(!pwShown)
  }


  return (
    <section>
      <h2>A scary movie DB.</h2>
      <p>
        
      </p>
      <h4>Sign Up</h4>
      <form id="sign-up-form">
        <label>Email: </label>
        <input type='email'></input>
      <label>Username: </label>
      <input type='text'></input>
      <div>
      <label>Password: </label>
      <input type={pwShown ? "text" : "password"}></input>
      <button onClick={togglePassword}>{pwShown ? "🙈" : '👀'}</button>
      </div>
      <button type="submit">Create New User</button>
      </form>

    </section>
  )

}

export default Home;