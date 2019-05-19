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
          <NavLink to='/' className='nb-link'>
            <div className='nb-nav-btn'>
              <p>Home</p>
            </div>
          </NavLink>
          <NavLink to='/about' className='nb-link'>
            <div className='nb-nav-btn'>
              <p>About</p>
            </div>
          </NavLink>
          <NavLink to='/services' className='nb-link'>
            <div className='nb-nav-btn'>
              <p>Services</p>
            </div>
          </NavLink>
          <NavLink to='/portfolio' className='nb-link'>
            <div className='nb-nav-btn'>
              <p>Portfolio</p>
            </div>
          </NavLink>
          <NavLink to='/reviews' className='nb-link'>
            <div className='nb-nav-btn'>
              <p>Reviews</p>
            </div>
          </NavLink>
          <NavLink to='/contact' className='nb-link'>
            <div className='nb-nav-btn'>
              <p>Contact</p>
            </div>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default NavBar;