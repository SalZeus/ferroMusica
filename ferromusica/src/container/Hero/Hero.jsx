import React from 'react'
import "./Hero.scss"
import {images} from "../../constants"
import { motion } from 'framer-motion'

const Hero = () => {

  const containerVariants={
    hidden:{
      y: -750,
    }, 
    visible:{
      y: 0,
      x: 0,
    },
    animate:{
      x: [-80, 80, -80],
      y: [0, -45, 0],
      transition:{
        x: {
          repeat: Infinity,
          duration: 0.6
        },
         y: {
          repeat: Infinity,
          duration: 0.3,
          ease: "easeOut"
       }
      }
    }
  }

  return (
    <div className='hero' id="home">
      <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="animate"
      className='main-logo'>
        <a href="#contactanos">
          <img src={images.horizontallogo} alt="" />
        </a>
      </motion.div>

      <div className='hero-image'>
        <img src={images.cover} alt="cover" />
      </div>

    </div>
  )
}

export default Hero