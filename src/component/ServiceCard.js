import React from 'react'

const ServiceCard = () => {
    return (
        <>
            <div className="card-container grid grid-two-column ">
                <div className="card service-card">
                    <div className="card-body">
                        <div className="icon my-4">
                            <i className="fa-solid fa-laptop-code"></i>
                        </div>
                        <h1 className='my-4'>Web Development</h1>
                        <p className="hero-para my-4">Building interactive website or webpages for your Business, Portfolio and more static website with latest Tools like ReactJs.</p>
                    </div>
                </div>
                <div className="card service-card">
                    <div className="card-body">
                        <div className="icon my-4">
                            <i className="fa-solid fa-mobile-screen"></i>
                        </div>
                        <h1 className='my-4'>Mobile Responsive</h1>
                        <p className="hero-para my-4">Experts at designing responsive websites, with CSS at the core of front end development alongside JavaScript and HTML.</p>
                    </div>
                </div>
                <div className="card service-card">
                    <div className="card-body">
                        <div className="icon my-4">
                            <i className="fa-brands fa-figma"></i>
                        </div>
                        <h1 className='my-4'>Website Design</h1>
                        <p className="hero-para my-4">Implementing new web designs with CSS & Bootstrap. I will also convert your Figma design into Reusable Code.</p>
                    </div>
                </div>
                <div className="card service-card">
                    <div className="card-body">
                        <div className="icon my-4">
                            <i className="fa-solid fa-database"></i>
                        </div>
                        <h1 className='my-4'>Rest API</h1>
                        <p className="hero-para my-4">Learning and Building RestAPI. I will create your RestAPI with using of latest tools like Node, Express and MongoDB.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard
