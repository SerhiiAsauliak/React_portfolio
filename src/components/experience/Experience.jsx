import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import {AiFillHtml5} from 'react-icons/ai'
import {DiReact} from 'react-icons/di'
import {IoLogoCss3} from 'react-icons/io'
import {SiJavascript} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'
import {SiRedux} from 'react-icons/si'
import {IoLogoNodejs} from 'react-icons/io'
import {FaGitSquare} from 'react-icons/fa'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {AiOutlineApi} from 'react-icons/ai'
import {AiFillApi} from 'react-icons/ai'
import {SiExpress} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'


export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <h5>Experienced in:</h5>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <h4>HTML</h4>
            </article>
            <article className='experience__details'>
              <IoLogoCss3 className='experience__details-icon'/>
              <h4>CSS</h4>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <h4>JavaScript</h4>
            </article>
            <article className='experience__details'>
              <DiReact className='experience__details-icon'/>
              <h4>React</h4>
            </article>
            <article className='experience__details'>
              <SiTypescript className='experience__details-icon'/>
              <h4>TypeScript</h4>
            </article>
            <article className='experience__details'>
              <SiRedux className='experience__details-icon'/>
              <h4>Redux</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
        <h5>Basic knowledge in:</h5>
          <div className="experience__content">
            <article className='experience__details'>
              <IoLogoNodejs className='experience__details-icon'/>
              <h4>NodeJS</h4>
            </article>
            <article className='experience__details'>
              <SiExpress className='experience__details-icon'/>
              <h4>Express</h4>
            </article>
            <article className='experience__details'>
              <AiOutlineConsoleSql className='experience__details-icon'/>
              <h4>SQL</h4>
            </article>
            <article className='experience__details'>
              <SiMongodb className='experience__details-icon'/>
              <h4>MongoDB</h4>
            </article>
            <article className='experience__details'>
              <AiOutlineApi className='experience__details-icon'/>
              <h4>Google Maps API</h4>
            </article>
            <article className='experience__details'>
              <AiFillApi className='experience__details-icon'/>
              <h4>gRPC</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
