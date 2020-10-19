import React from 'react';
import LinkButton from '../LinkButton';

import './styles.css'

interface Properties {
    title: string;
    description: string;
    imageURL: string;
    href: string;
    type: string;
    color?: string;
    buttonText: string;
}
const ProjectCard:React.FC<Properties> = ({title, description, imageURL, href, type, color, buttonText}) => {
  
  const DEFAULT_COLOR = "#fff6f3";

  const backgroundStyle = {
    backgroundColor: color && color == "" ? DEFAULT_COLOR : color
  }


  return (
    <div id="projectcard-component" className={type}>
      <div className="img-content" style={backgroundStyle}>
        <img src={imageURL}/>
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>
          {description}
        </p>
        <LinkButton
        href={href}
        title={buttonText}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
