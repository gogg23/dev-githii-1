import React from 'react';

function ProjectCard({src, link, h3}) {
  return (
      <a href="{link}"
      target='_blank'>
      <img src={src} alt='gym logo'/>
      <h3>{h3}</h3>
      <p>React Gym Website</p>
      </a>
  )
}

export default ProjectCard