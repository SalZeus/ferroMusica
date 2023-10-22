import React from 'react'
import "./Navbar.scss"
import { AiOutlineClose } from "react-icons/ai";
import { images } from "../../constants";
import { motion} from "framer-motion";
import { useState } from 'react';
import {AiFillInstagram, AiFillYoutube} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";


const Navbar = () => {
 const [toggle, setToggle] = useState(false)

  return (
    <motion.nav className='navbar'
    initial={{y: -250}}
    animate={{scale: 1.1, y: -1}}
    >
        <div className='link-container'>
            <ul className='navbar-links'>
                {["home", "videos", "contacto"].map((item) =>(
                    <li key={`link-${item}`}>
                        <a href={`#${item}`}>
                            {item}
                            <div>
                                <img src={images.creamdrippng} alt="Helado escurrido" />
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>

        <div className='social-media' size={55}>
            {/* <AiFillFire/> */}
            {/* <AiFillFacebook/> */}
            <a href="https://www.instagram.com/ferromusica/?hl=es">
                <AiFillInstagram/>
            </a>
            <a href="https://www.youtube.com/channel/UCmzhZY8tDbkE0hXQ6BnI2Pw">
                <AiFillYoutube/>
            </a>
            <a href="https://www.tiktok.com/@ferromusica">
                <FaTiktok/>
            </a>
        </div>
        <img className="navbar-logo"src={images.webplogo} alt="logo" />

        <div className='navbar-menu'>
            <img src={images.menu} onClick={()=>setToggle(true)} alt="Navbar toggle"/>
            {toggle &&(
            <motion.div
                whileInView={{x: [300, 0]}}
                transition={{duration: 0.85, ease: "easeOut"}}
            >
                <AiOutlineClose size={55}  onClick={()=>setToggle(false)} />
                <ul className='menu-links'>
                    {["videos", "contacto"].map((item) =>(
                        <li className="navbar-link" key={item}>
                            <a href={`#${item}`} onClick={()=>setToggle(false)}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.div>
            )}
        </div>
    </motion.nav>
  )
}

export default Navbar