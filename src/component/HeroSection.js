import React from 'react';
import { NavLink } from 'react-router-dom'

const HeroSection = ({subhead, name, myRole, myInfo, image,}) => {
    return (
        <> 
        {/*=============== Home section ===============*/}
        <div className="container">
        <div className="grid grid-two-column">
                <div className="section-hero-data">
                    <p className="hero-top-data">{subhead}</p>
                    <h1 className="hero-heading">
                        <span className='name'>{name} <br /></span>
                        <span className='myrole'>{myRole}</span>
                    </h1>
                    <p className="hero-para">{myInfo}</p>
                    <button className='btn hireme-btn'>
                        <NavLink to ="/contact">Hire Me</NavLink>
                    </button>
                </div>
                <div className="section-hero-img">
                    <picture>
                        <img src={image} alt="" />
                    </picture>
                </div>
            </div>
        </div>
        </>
    )
}

export default HeroSection
