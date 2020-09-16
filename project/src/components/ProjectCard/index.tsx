import React from 'react';

import './styles.css'

interface Properties {
    title: string;
    description: string;
    imageURL: string;
    href: string;
}
const ProjectCard:React.FC<Properties> = ({title, description, imageURL, href}) => {
  return (
    <div id="projectcard-component">
      <img src={imageURL}/>
      <div className="content">
        <h3>{title}</h3>
        <p>
          {description}
        </p>
        <a target="_blank" href={href}>Conferir detalhes do projeto</a>
      </div>
    </div>
  );
}

export default ProjectCard;
