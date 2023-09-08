import React from 'react';
import HeroSection from './component/HeroSection';
import Service from './Services';
import Contact from './Contact'

const Home = () => {

  const data = {
    subhead: "Hey There ! I'm ",
    name: "Farhaan Malik",
    myRole: "Frontend Developer",
    myInfo: "Building & Maintaining responsive websites. I would like to implement a new web design & convert Figma design into Reusable code.",
    image: "../images/profile.jpg",
  }
  return (
    <>
      <HeroSection { ...data }/>
      <Service />
      <Contact />
    </>
  )
}

export default Home
