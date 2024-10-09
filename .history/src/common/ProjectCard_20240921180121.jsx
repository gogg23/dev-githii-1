import React from 'react';

function ProjectCard({src, link}) {
  return (
      <a href="{link}"
      target='_blank'>
      <img src={src} alt='gym logo'/>
      <h3>Gym App</h3>
      <p>React Gym Website</p>
      </a>
  )
}

export default ProjectCard