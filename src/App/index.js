import React from 'react';
import SocialBar from '../SocialBar/SocialBar.js';
import NavBar from '../NavBar/NavBar.js';
import Home from '../Home/Home.js';
import About from '../About/About.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <SocialBar />
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;