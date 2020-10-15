import React from 'react';

import './styles.css'

interface Properties {
    href: string;
    title: string;
}

const LinkButton:React.FC<Properties> = ({href, title}) => {
  return (
    <a id="linkbutton-component" href={href} target="_blank">
        <span>{title}</span>
    </a>
  );
}

export default LinkButton;
