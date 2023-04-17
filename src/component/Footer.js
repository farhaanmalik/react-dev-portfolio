import React from 'react'
import { NavLink } from 'react-router-dom'

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
              <a href="https://t.me/webdvplr" target="_blank">Get Started</a>
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
              <div className="slinks d-flex mt-4 pt-2">
                <div className="link">
                  <a href="https://t.me/webdvplr" target="_blank"><i className="fa-brands fa-telegram"></i></a>
                </div>
                <div className="link">
                  <a href="https://www.linkedin.com/in/farhaan-malik-1b4022230/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <div className="link">
                  <a href="https://github.com/farhaanmalik" target="_blank"><i className="fa-brands fa-github"></i></a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Contact us</h3>
              <div className="info-text">
                <span>Phone: </span>
                <span><a href="tel:7380 3842 70">+91 7380 3842 70</a></span>
              </div>
              <div className="info-text">
                <span>Email: </span>
                <span><a href="mailto:thefarhan68@gmail.com">thefarhan68@gmail.com</a></span>
              </div>
            </div>
          </div>
        </div>
        {/* footer bottom */}
        <div className="footer-bottom">
          <hr />
          <div className="footer-bottom-end p-4">
            <p>@{new Date().getFullYear()} the.Farhaan. All Rights Reserved</p>
            <div className='d-flex justify-content-between'>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
