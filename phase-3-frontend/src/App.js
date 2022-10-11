import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Movies from './components/Movies';


function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);


  function handleDarkMode(e){
    setIsDarkMode(!isDarkMode)
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
      </Switch>
    </div>
  );
}

export default App;
