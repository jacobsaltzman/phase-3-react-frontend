import React, { useState, useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Movies from './components/Movies';
import NewMovieForm from './components/NewMovieForm';
import Signin from './components/Signin';
import Reviews from './components/Reviews';


function App() {

  const [movies, setMovies] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    fetch("http://localhost:9292/movies")
      .then((r) => r.json())
      .then((data)=> setMovies(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then((r) => r.json())
      .then((data)=> setReviews(data))
  }, [])


  function handleDarkMode(e){
    setIsDarkMode(!isDarkMode)
  }

  function onAddMovie(newMovie){
    setMovies([...movies, newMovie])
  }

  function onAddReview(newReview){
    setReviews([...reviews, newReview])
  }


  return (
    <div className={isDarkMode ? "App" : "App dark"}>
      <Header isDarkMode={isDarkMode} handleDarkMode={handleDarkMode}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/movies'>
          <Movies movies={movies}/>
        </Route>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/new'>
          <NewMovieForm onAddMovie={onAddMovie} onAddReview={onAddReview}/>
        </Route>
        <Route path='/reviews'>
          <Reviews reviews={reviews}/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
