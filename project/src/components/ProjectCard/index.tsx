import React from 'react';

import './styles.css'

interface Properties {
    title: string;
    description: string;
    imageURL: string;
    href: string;
    type: string;
}
const ProjectCard:React.FC<Properties> = ({title, description, imageURL, href, type}) => {
  
  return (
    <div id="projectcard-component" className={type}>
      <div className="img-content">
        <img src={imageURL}/>
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>
          {description}
        </p>
        <a target="_blank" href={href}>
          <span>Conferir</span>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
