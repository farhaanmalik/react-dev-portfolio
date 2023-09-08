import React from 'react'

const PortfolioCard = ({ projectData }) => {
    return (
        <>
            <div className="card-container grid grid-two-column">
                {/* fetching multiple card from ProjectAPI */}
                {projectData.map((curElem) => {
                    const { id, image, projectLink, projectName } = curElem;
                    return (
                        <div className="card portfolio-card p-0" key={id}>
                            <img className="card-img-top" src={image} alt="farhaanmalik_project" />
                            <div className="project-link">
                                <a href={projectLink} target="_blank" rel='noreferrer'><i className="fa-solid fa-link"></i></a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title m-0 px-2 pt-1">{projectName}</h5>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PortfolioCard
