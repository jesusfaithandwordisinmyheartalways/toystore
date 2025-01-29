




import React, { useContext, useState } from "react";
import '../Navbar/Navbar.css'
import search_icon from "../images/search-icon.png";
import cart from "../images/cart.png";
import user_icon from "../images/user icon.png";
import menu_logo from "../images/menu logo.png";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import { ToyContext } from "../../Context/ToyContextProvider";



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { TotalCartAmountItems } = useContext(ToyContext)



    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev); // Toggle the menu state
      };
    
      const closeMenu = () => {
        setIsMenuOpen(false); // Close the menu when triggered
      };





  return (
    <>


          <div className="navbar-container">

<div className="navbar-wrapper">
  <div><img onClick={toggleMenu} src={menu_logo} alt="menu" style={{ cursor: "pointer" }}  />
  </div>

    <Link to="/" className={'login-header'}><div><h3>Toys for You</h3> </div></Link>

<div className="navbar-wrapper-right-side">
    <img src={search_icon} alt="search" />
    <Link to="/login" ><div className="user-icon"><img src={user_icon} alt="user" /></div>
    </Link>


      <Link to="/cart"><div> <img src={cart} alt="cart" /></div></Link>

      <div><span className={'cart-count'}>{TotalCartAmountItems()}</span></div>


      
</div>




</div>  



{/* Conditionally render the Menu and pass closeMenu to close it */}
      <Menu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />


  </div>






    </>
  )
}







export default Navbar
