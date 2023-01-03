import React from 'react'
import CV from '../../assets/CV_Junior Frontend-Fullstack Developer_Serhii Asauliak_Nov2022_Eng.pdf'

export const HeaderButtons = () => {
  return (
    <div className="header__buttons">
        <a className='btn' href={CV} download>Download CV</a>
        <a className='btn btn-primary' href='#contacts'>Let's talk</a>
    </div>
  )

}
 