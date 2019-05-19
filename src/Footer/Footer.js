import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='f-container'>
        <form className='f-form'>
        <h2 className='f-title'>Ask a Question</h2>
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
          <div className='f-contact-section'>
            <img 
              className='f-icon'
              src={require(`../utils/assets/icons/email.svg`)} /> 
            <p>david.hoepner@att.net</p>
          </div>
          <div className='f-contact-section'>
            <img 
              className='f-icon'
              src={require(`../utils/assets/icons/phone.svg`)} />
            <p>(972) 672-4311</p>
          </div>
          <h3 className='f-contact-title'>Hours</h3>
            <p className='f-hour'>Monday: 9:00 - 5:00</p>
            <p className='f-hour'>Tueday: 9:00 - 5:00</p>
            <p className='f-hour'>Wednesday: 9:00 - 5:00</p>
            <p className='f-hour'>Thursday: 9:00 - 5:00</p>
            <p className='f-hour'>Friday: 9:00 - 5:00</p>
            <p className='f-hour'>Saturday: Closed</p>
            <p className='f-hour'>Sunday: Closed</p>
        </div>
    </div>
  )
}

export default Footer;