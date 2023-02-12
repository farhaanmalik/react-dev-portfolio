import React, { useState } from 'react'
import PortfolioCard from './component/PortfolioCard'
import Project from './ProjectAPI'

const Portfolio = () => {

  const [projectData] = useState(Project);

  return (
   <>
     <PortfolioCard projectData={projectData}/>
   </>
  )
}

export default Portfolio
