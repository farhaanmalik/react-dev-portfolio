import React from 'react';
import HeroSection from './component/HeroSection';
import Service from './Services';
import Contact from './Contact'

const Home = () => {

  const data = {
    subhead: "Assalamu'alaikum, I'm ",
    name: "Farhaan Malik",
    myRole: "Frontend Developer",
    myInfo: "Building & Maintaining responsive websites. Exploring new Web designs. Converting Figma design into HTML Code.",
    image: "./images/main.jpg",
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
