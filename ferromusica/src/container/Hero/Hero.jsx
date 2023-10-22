import React from 'react'
import "./Hero.scss"
import {images} from "../../constants"
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='hero'>
      <motion.div
      initial={{y: -750}}
      animate={{ y: -1}}
      className='main-logo'>
        <img src={images.horizontallogo} alt="" />
      </motion.div>

      <div className='hero-image'>
        <img src={images.cover} alt="cover" />
      </div>

    </div>
  )
}

export default Hero