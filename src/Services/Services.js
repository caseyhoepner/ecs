import React, { Component } from 'react';
import servicesData from '../utils/services.js';
// import './Services.css';

const Services = () => {
  
  
  const services = servicesData.map(domain => {
    const serviceList = domain.services.map(service => {

      return <p className='s-service-item' key={service}>{service}</p>
    });

    return (
      <div key={domain.category} className='s-service'>
        <h2 className='s-subheading'>{domain.name}</h2>


        { serviceList }

      </div>
    )
  })    

  return (
    <div className='s-container'>
      <h1 className='s-title'>services</h1>
      <div className='s-services'>

        { services }
        
      </div>
    </div>
  )
}

export default Services;