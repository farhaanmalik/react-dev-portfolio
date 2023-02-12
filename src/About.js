import React from 'react';
import HeroSection from './component/HeroSection';

const About = () => {

  const data = {
    subhead: "WHO I AM",
    name: "Farhaan Malik",
    image: "./images/about.jpg",
    myInfo: "A Front-end Developer for building websites & exploring new web design with Responsive mobile. Highly skilled in HTML CSS Bootstrap and working knowledge of JavaScript. Learning Advances JavaScript and ReactJs. I am deeply interested in MERN STACK development.",
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
          <div className="ed-skl-card">
            <h2 className='px-4'>My Educations</h2>
            <div className="edt-card">
              <div className="education-box">
                <h4>Bachelor Of Computer Applications</h4>
                <p>2022 - Present</p>
              </div>
              <div className="education-box">
                <h4>Inter Mediate</h4>
                <p>2019 - 2021</p>
              </div>
            </div>
          </div>

          <div className="ed-skl-card">
            <h2 className='px-4'>My Skills</h2>
            <div className="skill-box">
              <span className='skill'>HTML</span>
              <span className='skill'>CSS</span>
              <span className='skill'>Bootstrap</span>
              <span className='skill'>Material UI</span>
              <span className='skill'>Basic JavaScript</span>
              <span className='skill'>Basic React</span>
              <span className='skill'>Rest API</span>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default About
