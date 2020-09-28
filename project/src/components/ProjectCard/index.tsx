import React from 'react';

import './styles.css'

interface Properties {
    title: string;
    description: string;
    imageURL: string;
    href: string;
    spotlight?: boolean;
}
const ProjectCard:React.FC<Properties> = ({title, description, imageURL, href, spotlight}) => {
  return (
    <div id="projectcard-component" className={spotlight ? "spotlight" : "normal"}>
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
