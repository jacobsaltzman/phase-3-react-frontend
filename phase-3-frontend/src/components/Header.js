import React from "react";
import { Link } from "react-router-dom";

const Header = ({handleDarkMode, isDarkMode}) => {

  
  return(
    <header className="App-header">
      <div id="dark-button">
          <button onClick={handleDarkMode}>{isDarkMode? 'Darkmode 🌙': 'Lightmode ☀️'} </button>
      </div>
        <div className="navbar-header">
          <h1 id="logo">
            Horror Rater
          </h1>
          <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/signin">Sign In</Link>
            
          </div>
        </div>
    </header>
  )
}

export default Header;