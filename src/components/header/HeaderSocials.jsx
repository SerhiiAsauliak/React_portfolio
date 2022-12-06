import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/serhii-asauliak-a5698a257" target='_blank' rel="noreferrer">
        <BsLinkedin/>
      </a>
      <a href="https://github.com/SerhiiAsauliak" target='_blank' rel="noreferrer">
        <BsGithub/>
      </a>
    </div>
  )
}
