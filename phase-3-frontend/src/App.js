import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Movies from './components/Movies';
import NewMovieForm from './components/NewMovieForm';
import Signin from './components/Signin';


function App() {

  const [movies, setMovies] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);


  function handleDarkMode(e){
    setIsDarkMode(!isDarkMode)
  }

  function onAddMovie(newMovie){
    setMovies([...movies, newMovie])
  }


  return (
    <div className={isDarkMode ? "App" : "App dark"}>
      <Header isDarkMode={isDarkMode} handleDarkMode={handleDarkMode}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/new'>
          <NewMovieForm onAddMovie={onAddMovie}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
