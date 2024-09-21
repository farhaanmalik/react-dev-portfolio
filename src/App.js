import React, { useEffect, useState } from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import Error from './pages/Error';
import GoTotop from './GoTotop';
import Loading from './component/Loading';

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 2000);
  })

  return (
    <>
      {loading ?
        <Loading />
        :
        <>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
          </BrowserRouter>
          <GoTotop />
        </>
      }

    </>
  )
}

export default App

