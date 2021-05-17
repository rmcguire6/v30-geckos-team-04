import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import About from'../@modules/about/About'
import Dashboard from '../@modules/dashboard//Dashboard'
import Region from '../@modules/region/Region'
import Resources from '../@modules/resources/Resources'

const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Dashboard</Link>
            </li>
            <li>
              <Link to='/about'>About Air Quality</Link>
            </li>
            <li>
              <Link to='/region'>Region</Link>
            </li>
            <li>
              <Link to='/resources'>Resources</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/region'>
            <Region />
          </Route>
          <Route path='/resources'>
            <Resources />
          </Route>
          <Route path='/'>
            <Dashboard />
          </Route>
        </Switch >
      </div>
    </Router>
  )
}
export { AppRouter as default }