import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='a-container'>
      <h1>About Us</h1>
      <div className='a-text-pic-cont'>
        <div className='a-text-cont'>
          <p className='a-text'>Engineered Construction Solutions is a construction and remodeling company serving the North Dallas area. It was formed in July of 2010 when Dave Hoepner, owner and operator, turned his lifelong hobby of construction and design into a full-time endeavor.</p>
          <p className='a-text'>Dave's experience covers ground-up construction as well as all phases of remodeling. His mechanical mind enables him to troubleshoot issues big and small and his creative design techniques allow him to think outside the box and offer suggestions to customers that they may not have considered.</p>
          <p className='a-text'>Dave's pride in his work drives his desire to produce high quality results for his clients.</p>
        </div>
        <div className='a-dave-pic'></div>
      </div>
    </div>
  )
}

export default About;