import React, { useState } from 'react'
import PortfolioCard from './component/PortfolioCard'
import Project from './component/ProjectData'

const Portfolio = () => {

  const [projectData] = useState(Project);

  return (
    <>
      <section className="card-section container">
        <div className="common-heading">
          <p className='common-subheading mb-2'>What I Have Done</p>
          <h1>Visit My Projects</h1>
        </div>
        <PortfolioCard projectData={projectData} />
      </section>

    </>
  )
}

export default Portfolio
