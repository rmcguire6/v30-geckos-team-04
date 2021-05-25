import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './AppRouter.module.css';
import Mission from '../@modules/mission/Mission';
import About from '../@modules/about/About';
import Home from '../@modules/home/Home';
import Region from '../@modules/region/Region';
import Resources from '../@modules/resources/Resources';
import NavBar from '../components/nav-bar/NavBar';

const AppRouter = () => {
  return (
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
  );
};
export { AppRouter as default };
