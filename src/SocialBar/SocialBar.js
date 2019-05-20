import React, {Component} from 'react';
import './SocialBar.css';

export class SocialBar extends Component {
  render() {
    return (
      <div className='sb-container'>
        <div className='sb-icons'>
          <img 
            className='sb-icon'
            src={require('../utils/assets/icons/facebook.svg')}/>          <img 
            className='sb-icon'
            src={require('../utils/assets/icons/linkedin.svg')}/>
        </div>
        <p className='sb-call'>Call Dave today! (972) 672-4311</p>
      </div>
    )
  }
}

export default SocialBar;