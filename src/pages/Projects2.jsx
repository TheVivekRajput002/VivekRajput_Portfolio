

import React from 'react'
import ProjectCard2 from '../components/ProjectCard2'
import ProjectsData from '../data/ProjectsData.json'


const Projects = () => {
  return (
    <div className='px-6'>

      {
        ProjectsData.map((project, index) => (
          <ProjectCard2
            key={index}
            Head={project.head}
            SS={project.ss}
            tagline={project.tagline}
            problem={project.problem}
            highlights={project.highlights}
            impact={project.impact}
            tech={project.tech}
            role={project.role}
            contributions={project.contributions}
            Url={project.url}
            icons={project.icons}
            year={project.year}
          />
        ))
      }

    </div>
  )
}

export default Projects