import React from 'react';
import HeroSection from './component/HeroSection';
import Educations from './component/Educations'
import Skills from './component/Skills'

const About = () => {

  const data = {
    subhead: "WHO I AM",
    name: "Farhaan Malik",
    image: "./images/about.jpg",
    myInfo: "A Self-taught Front-end Developer for building websites & exploring new web design with Responsive mobile.Highly skilled in HTML CSS Bootstrap and working knowledge of JavaScript, React and Firebase. Learning Advances JavaScript and ReactJs. I am deeply interested in MERN STACK development.",
  }

  return (
    <>
      <HeroSection {...data} />
      <div className="about-section">
        <div className="common-heading">
          <p className='common-subheading mb-2'>My Educations & Skills</p>
          <h1>More About Me</h1>
        </div>

        <div className="card-container grid grid-two-column ">
          <Educations />
          <Skills />
        </div>
      </div>
    </>
  )
}

export default About
