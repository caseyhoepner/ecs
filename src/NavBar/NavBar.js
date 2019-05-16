import React, {Component} from 'react';
import './NavBar.css';

export class NavBar extends Component {
  render() {
    return (
      <div className='nb-container'>
        <img 
          className='nb-logo'
          src={require('../utils/assets/logo.png')}/>
      </div>
    )
  }
}

export default NavBar;