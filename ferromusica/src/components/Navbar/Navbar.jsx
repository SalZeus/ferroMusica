import React from 'react'
import "./Navbar.scss"
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import { images } from "../../constants";
import { motion} from "framer-motion";
import { useState } from 'react';


const Navbar = () => {
 const [toggle, setToggle] = useState(false)

  return (
    <nav className='navbar'>
        <img className="navbar-logo"src={images.logo} alt="logo" />
        
        <ul className='navbar-links'>
            {["home", "hero", "about", "contact"].map((item) =>(
                <li key={`link-${item}`}>
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>

        <div className='navbar-menu'>
            <img src={images.menu} onClick={()=>setToggle(true)} alt="Navbar toggle"/>
            {toggle &&(
            <motion.div
                whileInView={{x: [300, 0]}}
                transition={{duration: 0.85, ease: "easeOut"}}
            >
                <AiOutlineClose size={55}  onClick={()=>setToggle(false)} />
                <ul className='menu-links'>
                    {["home", "hero", "about", "contact"].map((item) =>(
                        <li className="navbar-link" key={item}>
                            <a href={`#${item}`} onClick={()=>setToggle(false)}>{item}</a>
                        </li>
                    ))}
                </ul>
            </motion.div>
            )}
        </div>
    </nav>
  )
}

export default Navbar