import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';


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
      </Switch>
    </div>
  );
}

export default App;
