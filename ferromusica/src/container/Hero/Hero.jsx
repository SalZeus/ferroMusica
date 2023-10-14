import React from 'react'
import "./Hero.scss"
import {images} from "../../constants"

const Hero = () => {
  return (
    <div className='hero'>
      <h1>Ferro Música</h1>
      <img src={images.cover} alt="cover image" />
      
    </div>
  )
}

export default Hero