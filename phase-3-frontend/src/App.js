import React, { useState, useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Movies from './components/Movies';
import NewMovieForm from './components/NewMovieForm';
import Signin from './components/Signin';




function App() {

  const [movies, setMovies] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/movies")
      .then((r) => r.json())
      .then((data)=> setMovies(data))
  }, [])

  
  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((data)=> setUsers(data))
  }, [])


  function handleDarkMode(e){
    setIsDarkMode(!isDarkMode)
  }

  function onAddMovie(newMovie){
    setMovies([...movies, newMovie])
  }


  

  function onAddUser(newUser){
    setUsers([...users, newUser])
  }




  return (
    <div className={isDarkMode ? "App" : "App dark"}>
      <Header isDarkMode={isDarkMode} handleDarkMode={handleDarkMode}/>
      <Switch>
        <Route exact path="/">
          <Home onAddUser={onAddUser} users={users}/>
        </Route>
        <Route path='/movies'>
          <Movies movies={movies}/>
        </Route>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/new'>
          <NewMovieForm onAddMovie={onAddMovie}/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
