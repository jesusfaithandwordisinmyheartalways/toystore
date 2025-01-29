




import React from 'react'
import '../Menu/Menu.css'
import { Link } from "react-router-dom";
import youtube_icon from "../images/youtube-logo.png";
import instagram_icon from "../images/instagram-icon.jpg";


const Menu = ({ isMenuOpen, closeMenu }) => {


  return (
   <>

<div className={`navbar-menu-container ${isMenuOpen ? "open" : ""}`} onClick={closeMenu}>
      <div className="navbar-menu-content" onClick={(e) => e.stopPropagation()} // Prevent menu from closing when clicking inside
      >
        <div className="close-btn"><button onClick={closeMenu}>X</button></div>  {/* Close menu */}

        <div className="navbar-menu-wrapper">
          <Link className="navbar-link" to="/login" onClick={closeMenu}> Log In</Link>
          <Link className="navbar-link" to="/mario" onClick={closeMenu}> Mario </Link>
          <Link className="navbar-link" to="/lugi" onClick={closeMenu}> Lugi</Link>
          <Link className="navbar-link" to="/spiderman" onClick={closeMenu}> Spider Man </Link>
          <Link className="navbar-link" to="/wonderwoman" onClick={closeMenu}> Wonder Woman </Link>
          <Link className="navbar-link" to="/cliford" onClick={closeMenu}> Cliford </Link>
          <Link className="navbar-link" to="/captainamerica" onClick={closeMenu}> Capitan America </Link>




          <div className="navbar-menu-icon-wrapper">
            <img src={youtube_icon} alt="YouTube" />
            <img src={instagram_icon} alt="Instagram" />
          </div>

        </div>


      </div>



    </div>





   </>
  )
}

export default Menu
