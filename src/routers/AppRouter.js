import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Mission from "../@modules/mission/Mission";
import About from "../@modules/about/About";
import Home from "../@modules/home/Home";
import Region from "../@modules/region/Region";
import Resources from "../@modules/resources/Resources";
import NavBar from "../@modules/common/components/nav-bar/NavBar";
import CurrentContext from "../context/Current";
import useGetCountriesAverages from "../hooks/useGetCountriesAverages";

const AppRouter = () => {
  const [{ countries }] = useGetCountriesAverages();
  const [currentLocation, setCurrentLocation] = useState("");
  return (
    <Router>
      <NavBar />
      <Switch>
        <CurrentContext.Provider
          value={{ currentLocation, setCurrentLocation, countries }}
        >
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/region">
            <Region />
          </Route>
        </CurrentContext.Provider>
        <Route path="/mission">
          <Mission />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
      </Switch>
    </Router>
  );
};
export { AppRouter as default };
