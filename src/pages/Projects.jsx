

import React from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectsData from '../data/ProjectsData.json'


const Projects = () => {
  return (
    <div className='mx-6 mt-3'>

      {
        ProjectsData.map((project, index) => (
          <ProjectCard
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
            github={project.github}
          />
        ))
      }

    </div>
  )
}

export default Projects