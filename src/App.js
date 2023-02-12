import React from 'react'
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import Error from './Error';
import GoTotop from './GoTotop';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <GoTotop />
    </>
  )
}

export default App

