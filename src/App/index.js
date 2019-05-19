import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import SocialBar from '../SocialBar/SocialBar.js';
import NavBar from '../NavBar/NavBar.js';
import Footer from '../Footer/Footer.js';
import Home from '../Home/Home.js';
import About from '../About/About.js';
import Services from '../Services/Services.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route path='/' component={SocialBar} />
      <Route path='/' component={NavBar} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
      </Switch>
      <Route path='/' component={Footer} />
    </div>
  );
}

export default withRouter(App);