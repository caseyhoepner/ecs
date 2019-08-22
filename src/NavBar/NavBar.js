import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export class NavBar extends Component {
  render() {
    return (
      <div className='nb-container'>
        <div className='nb-icons'>
          <div className='nb-fb-icon'>
            <a 
              className='nb-social-link' 
              href='https://www.facebook.com'>
            </a>
          </div>
          <div className='nb-li-icon'>
            <a 
              className='nb-social-link' 
              href='https://www.linkedin.com/in/dave-hoepner-7b6a499/'>
            </a>
          </div>
        </div>
        <div className='nb-nav-btns'>
          <NavLink to='/' className='nb-link'>
            <div className='nb-nav-btn'>
              <p className ='nb-nav-btn-text'>Home</p>
            </div>
          </NavLink>
          <NavLink to='/about' className='nb-link'>
            <div className='nb-nav-btn'>
              <p className ='nb-nav-btn-text'>About</p>
            </div>
          </NavLink>
          <NavLink to='/services' className='nb-link'>
            <div className='nb-nav-btn'>
              <p className ='nb-nav-btn-text'>Services</p>
            </div>
          </NavLink>
          <NavLink to='/portfolio' className='nb-link'>
            <div className='nb-nav-btn'>
              <p className ='nb-nav-btn-text'>Portfolio</p>
            </div>
          </NavLink>
          <NavLink to='/testimonials' className='nb-link'>
            <div className='nb-nav-btn'>
              <p className ='nb-nav-btn-text'>Testimonials</p>
            </div>
          </NavLink>
          <NavLink to='/contact' className='nb-link'>
            <div className='nb-nav-btn'>
              <p className ='nb-nav-btn-text'>Contact</p>
            </div>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default NavBar;