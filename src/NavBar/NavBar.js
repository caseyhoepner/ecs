import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export class NavBar extends Component {
  render() {
    return (
      <div className='nb-container'>
        <div className='nb-logo-container'>
          <img 
            className='nb-logo'
            src={require('../utils/assets/logo.png')}/>
        </div>
        <div className='nb-nav-btns'>
          <div className='nb-nav-btn'><p>Home</p></div>
          <NavLink to='/about'>
            <div className='nb-nav-btn'><p>About</p></div>
          </NavLink>
          <div className='nb-nav-btn'><p>Services</p></div>
          <div className='nb-nav-btn'><p>Portfolio</p></div>
          <div className='nb-nav-btn'><p>Reviews</p></div>
          <div className='nb-nav-btn'><p>Contact</p></div>
        </div>
      </div>
    )
  }
}

export default NavBar;