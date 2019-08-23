import React from 'react';
// import './Portfolio.css';
import { portfolioPics } from '../utils/portfolio-pics';

const Portfolio = () => {
  const portfolioCategories = portfolioPics.map(category => {
    console.log(category.mainPic)
    return (
      <div key={`${category.category}`}>
        <h2>
          { category.category }
        </h2>
        <img src={require(`../utils/assets/pics/${category.mainPic}`)}></img>
      </div>
    );
  })




  return (
    <div>
      { portfolioCategories }
    </div>
  )
}

export default Portfolio;