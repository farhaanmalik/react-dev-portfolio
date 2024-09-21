import React from "react";

const HeroSection = ({ subhead, name, myRole, myInfo, image }) => {
  return (
    <>
      {/*=============== Home section ===============*/}
      <div className="container">
        <div className="grid grid-two-column">
          <div className="section-hero-data">
            <p className="hero-top-data">{subhead}</p>
            <h1 className="hero-heading">
              <span className="name">
                {name} <br />
              </span>
              <span className="myrole">{myRole}</span>
            </h1>
            <p className="hero-para">{myInfo}</p>
            <button className="btn hireme-btn">
              <a href="https://wa.me/+917380384270" target="_blank" rel="noreferrer">Let's Connect</a>
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
  );
};

export default HeroSection;
