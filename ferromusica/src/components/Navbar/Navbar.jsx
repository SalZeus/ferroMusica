import React from 'react'
import "./Navbar.scss"
import { AiOutlineAlignRight } from "react-icons/ai";
import { images } from "../../constants"


const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={images.logo} alt="logo" />
        <div className='navbar-logo'>
            <AiOutlineAlignRight size={55} />
        </div>
        <ul className='navbar-links'>
            {["home", "hero", "about", "contact", "footer"].map((item) =>(
                <li className="navbar-link" key={`link-${item}`}>
                    <div />
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar