import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import About from '../pages/pageAbout';
import Home from '../pages/pageHome';
import Users from '../pages/pageUsers';
import Page404 from '../pages/page404';

export default class NavBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/users'>Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/users'>
              <Users />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
