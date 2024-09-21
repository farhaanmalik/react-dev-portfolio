import React from 'react';
import HeroSection from '../component/HeroSection';
import Educations from '../component/Educations'
import Skills from '../component/Skills'

const About = () => {

  const data = {
    subhead: "WHO I AM",
    name: "Farhaan Malik",
    image: "./images/profile.jpg",
    myInfo: `A passionate Frontend Developer currently pursuing Bachelor's degree in Computer Applications. I specialize in HTML/CSS for pixel-perfect designs, JavaScript for interactivity and dynamic UIs and Frontend frameworks like Bootstrap, Tailwind CSS & React.Js. Let's connect to discuss potential projects.`,
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
