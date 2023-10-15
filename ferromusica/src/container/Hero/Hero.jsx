import React from 'react'
import "./Hero.scss"
import {images} from "../../constants"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='main-logo'>
        <img src={images.horizontallogo} alt="" />
      </div>

      <div className='hero-image'>
        <img src={images.cover} alt="cover" />
      </div>

    </div>
  )
}

export default Hero