import React from 'react'
import Social from './Social'

const Footer = () => {
  return (
    <>
      <div className="contact-short">
        <div className="contact-short-section">
          <div>
            <h3>Ready to Get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <button className='btn'>
              <a href="https://t.me/farhaan005" target="_blank" rel='noreferrer'>Get Started</a>
            </button>
          </div>
        </div>
      </div>

      <footer>
        {/* footer-top */}
        <div className="container">
          <hr />
          <div className="footer-top">
            <div className='footer-about'>
              <h3>the.Farhaan</h3>
              <p className="hero-para">Building and Maintaining responive websites. Feel free contact me.</p>
            </div>
            <div className='footer-social'>
              <h3>Connect with Me</h3>
              <Social />
            </div>
            <div className="footer-contact">
              <h3>Contact us</h3>
              <div className="info-text">
                <span>Phone: </span>
                <span><a href="tel:7380 3842 70">+91 7380 3842 70</a></span>
              </div>
              <div className="info-text">
                <span>Email: </span>
                <span><a href="mailto:farhaanmalik005@gmail.com">farhaanmalik005@gmail.com</a></span>
              </div>
            </div>
          </div>
        </div>
        {/* footer bottom */}
        <div className="footer-bottom">
          <hr />
          <div className="footer-bottom-end p-4">
            <p>© {new Date().getFullYear()} the.Farhaan. All Rights Reserved</p>
            <div>
              <p>Made with React.Js</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
