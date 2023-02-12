import React from 'react'

const PortfolioCard = ({ projectData }) => {
    return (
        <>
            <section className="card-section container">
                <div className="common-heading">
                    <p className='common-subheading mb-2'>Visit My Portfolio</p>
                    <h1>My PortFolio</h1>
                </div>
                <div className="card-container grid grid-two-column">
                    {/* fetching multiple card from ProjectAPI */}
                    {projectData.map((curElem) => {
                        return (
                            <div className="card portfolio-card p-0" key={curElem.id}>
                                <img className="card-img-top" src={curElem.image} alt="Card image cap" />
                                <div className="project-link">
                                    <a href={curElem.projectLink} target="_blank"><i className="fa-solid fa-link"></i></a>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title m-0 px-2 pt-1">{curElem.projectName}</h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default PortfolioCard
