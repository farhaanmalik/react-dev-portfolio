import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav>
            <div className={openMenu ? "menuIcon active" : "menuIcon"}>
                <ul className="navbar-list m-0">
                    <li>
                        <NavLink to="/"  onClick={()=> {setOpenMenu(false)}} className='navbar-link'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"  onClick={()=> {setOpenMenu(false)}} className='navbar-link'>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services"  onClick={()=> {setOpenMenu(false)}} className='navbar-link'>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio"  onClick={()=> {setOpenMenu(false)}} className='navbar-link'>Portfolio</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/contact"  onClick={()=> {setOpenMenu(false)}} className='navbar-link'>Contact Us</NavLink>
                    </li> */}
                </ul>
                <div className="mobile-navbar-btn d-flex align-items-center">
                    <div className="openNav-btn menu-btn" 
                    onClick={()=> {setOpenMenu(true)}}><i className="fa-solid fa-bars"></i></div>

                    <div className="closeNav-btn menu-btn" 
                    onClick={()=> {setOpenMenu(false)}}><i className="fa-solid fa-xmark"></i></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
