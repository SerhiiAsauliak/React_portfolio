import React from 'react'
import './portfolio.css'
import {data} from '../../data/portfolioData.js'

export const Portfolio = () => {
  const items = data.map(({id, title, image, github, demo}) => {
    return (
      <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />  
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
            <a href={github} target='_blank' className='btn' rel="noreferrer">Github</a>
            <a href={demo} target='_blank' className='btn btn-primary' rel="noreferrer">Live Demo</a>
          </div>
        </article>
    )}
  )

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {items}
      </div>
    </section>
  )
}
