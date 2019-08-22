import React, {Component} from 'react';
import './Home.css';

export class Home extends Component {
  render() {
    return (
      <div className='h-container'>
        <img className='h-tools-icon' src={require('../utils/assets/icons/tools.svg')}/>
        <h1 className='h-title'>Engineered Construction Solutions</h1>
      </div>
    )
  }
}

export default Home;