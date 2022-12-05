import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <h4>HTML</h4>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <h4>CSS</h4>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <h4>JavaScript</h4>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <h4>React</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <h4>HTML</h4>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <h4>CSS</h4>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <h4>JavaScript</h4>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <h4>React</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
