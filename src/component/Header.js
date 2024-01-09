import React from 'react';
import { NavLink } from "react-router-dom";
import Navbar from './Navbar';

const Header = () => {
    // const [show, setShow] = useState(false);

    return (
        <>
        <header>
            <NavLink to="/" className='navbar-link logo-link'>
                <h2 className='logo'><span>the.</span>farhaan</h2>
                <img src="./images/main.jpg" className='sm-logo-img' alt="" />
            </NavLink>
            <Navbar />
            
        </header>
        <hr />
        </>
    )
}

export default Header
