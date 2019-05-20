import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import SocialBar from '../SocialBar/SocialBar.js';
import NavBar from '../NavBar/NavBar.js';
import Footer from '../Footer/Footer.js';
import Home from '../Home/Home.js';
import About from '../About/About.js';
import Services from '../Services/Services.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Testimonials from '../Testimonials/Testimonials.js';
import Contact from '../Contact/Contact.js';

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
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/testimonials' component={Testimonials} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <Route path='/' component={Footer} />
    </div>
  );
}

export default withRouter(App);