import React from 'react';
import ServiceCard from '../component/ServiceCard';

const Service = () => {

  return (
    <>
      <section className="card-section">
        <div className="common-heading">
          <p className='common-subheading mb-2'>Services</p>
          <h1>What I DO</h1>
        </div>
        <ServiceCard />
      </section>
    </>
  )
}

export default Service;
