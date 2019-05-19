import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='f-container'>
        <form className='f-form'>
        <h2 className='f-title'>Contact Us!</h2>
          <label>Name: <br/>
            <input 
            className='f-form-element' 
            type="text" 
            name="name" />
          </label>
          <label>Email Address: <br/>
            <input 
              className='f-form-element' 
              type="email" 
              name="email" />
          </label>
          <label>Inquiry: <br/>
            <textarea 
              className='f-form-element f-textarea' 
              type="text" 
              name="inquiry" />
          </label>
          <input 
            className='f-submit-btn'
            type="submit" 
            value="Submit" />
        </form>
      <div className='f-contact-info'>
        <h2 className='f-title'>Contact</h2>
          <p>david.hoepner@att.net</p>
          <p>(972) 672-4311</p>
          <h3>Hours</h3>
            <p>Monday: 9:00 - 5:00</p>
            <p>Tueday: 9:00 - 5:00</p>
            <p>Wednesday: 9:00 - 5:00</p>
            <p>Thursday: 9:00 - 5:00</p>
            <p>Friday: 9:00 - 5:00</p>
            <p>Saturday: Closed</p>
            <p>Sunday: Closed</p>
        </div>
    </div>
  )
}

export default Footer;