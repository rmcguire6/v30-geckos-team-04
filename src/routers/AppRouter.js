import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Mission from '../@modules/mission/Mission';
import About from '../@modules/about/About';
import Home from '../@modules/home/Home';
import Region from '../@modules/region/Region';
import Resources from '../@modules/resources/Resources';
import NavBar from '../components/nav-bar/NavBar';
import CurrentLocationContext from '../context/CurrentLocation';

const AppRouter = () => {
  const [currentLocation, setCurrentLocation] = useState('');
  return (
    <CurrentLocationContext.Provider
      value={{ currentLocation, setCurrentLocation }}
    >
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/mission">
            <Mission />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/region">
            <Region />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
        </Switch>
      </Router>
    </CurrentLocationContext.Provider>
  );
};
export { AppRouter as default };
