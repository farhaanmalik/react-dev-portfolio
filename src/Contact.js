/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const Contact = () => {

  return (
    <>
      <section className="contact-section px-2">
        <div className="common-heading">
          <p className='common-subheading mb-2'>Feel free to reach us</p>
          <h1>Contact Me</h1>
        </div>

        <div className='contact-area'>
          <form action='' method='POST' className="form-area my-2">
            <div className="mb-3">
              <label forhtml="exampleInput" className="form-label">Full Name</label>
              <input type="text" name='name' className="form-control" id="name" required autoComplete='off' />
            </div>
            <div className="mb-3">
              <label forhtml="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" required autoComplete='off' />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label forhtml="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea className="form-control" name='message' id="message" rows="3" required autoComplete='off'></textarea>
            </div>
            <button type="submit" className="btn submit-btn">Submit</button>
          </form>

          <div className="map-direction">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1804617784915!2d80.9761800698229!3d26.8977672844394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957f067977d3f%3A0xb73c72a8be1689a!2sAbrar%20Nagar%2C%20Kalyanpur%20(East)%2C%20Lucknow%2C%20Uttar%20Pradesh%20226022!5e0!3m2!1sen!2sin!4v1675516128685!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0, borderRadius: 10 }} allowFullScreen="" loading="lazy" ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
