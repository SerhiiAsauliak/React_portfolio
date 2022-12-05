import React from 'react'
import './about.css'
import MeAbout from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MeAbout} alt="about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Entry-level</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Experience</h5>
              <small>Entry-level</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quaerat eum ex nam ratione totam, et unde temporibus iure molestias est suscipit consectetur, aperiam iusto in beatae laborum. Dolorum, aut.
          </p>
          <a href="#contacts" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}
