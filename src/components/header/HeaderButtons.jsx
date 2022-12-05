import React from 'react'
import CV from '../../assets/cv.pdf'

export const HeaderButtons = () => {
  return (
    <div className="header__buttons">
        <a className='btn' href={CV} download>Download CV</a>
        <a className='btn btn-primary' href='#contact'>Let's talk</a>
    </div>
  )
}
