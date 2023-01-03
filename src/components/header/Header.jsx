import React from 'react'
import { HeaderButtons } from './HeaderButtons'
import "./header.css"
import MyPhoto from '../../assets/header-photo2.png'
import { HeaderSocials } from './HeaderSocials'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Serhii Asauliak</h1>
        <h5>Frontend/React (Fullstack) Developer</h5>
        <HeaderButtons/>
        <a href="#footer" className='scroll__down'>Scroll Down</a>
        <HeaderSocials/>
        <div className="me">
          <img src={MyPhoto} alt="me" />
        </div>
      </div>
    </header>
  )
}
