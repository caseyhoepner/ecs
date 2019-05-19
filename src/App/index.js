import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import SocialBar from '../SocialBar/SocialBar.js';
import NavBar from '../NavBar/NavBar.js';
import Home from '../Home/Home.js';
import About from '../About/About.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route path='/' component={SocialBar} />
      <Route path='/' component={NavBar} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default withRouter(App);